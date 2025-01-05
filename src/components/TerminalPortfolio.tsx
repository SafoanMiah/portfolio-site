'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import data from "../lib/data.json";

// Prepare projects data
const projects = data.projects.map((project, index) => ({
    id: index + 1,
    name: project.name,
    description: project.description,
    github: project.github
}));

// Prepare experiences data
const experiences = data.experience.map((exp, index) => ({
    id: index + 1,
    title: exp.role + " at " + exp.company,
    description: exp.description
}));

// Prepare education data
const education = data.education.map((edu, index) => ({
    id: index + 1,
    degree: edu.degree,
    institution: edu.university,
    year: "2023" // Assuming the year is the same for all
}));

// Extract other data
const aboutMe = data.aboutMe;
const contacts = data.contacts;
const name = data.name;
const skills = data.skills;

// Define props for TerminalPortfolio component
interface TerminalPortfolioProps {
    isOpen: boolean;
    onClose: () => void;
}

// TerminalPortfolio component definition
const TerminalPortfolio: React.FC<TerminalPortfolioProps> = ({ isOpen, onClose }) => {
    // State management for terminal functionality
    const [activeTab, setActiveTab] = useState('home')
    const [input, setInput] = useState('')
    const [output, setOutput] = useState<string[]>([])
    const [history, setHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [currentDirectory, setCurrentDirectory] = useState('~')
    const inputRef = useRef<HTMLInputElement>(null)
    const [isMaximized, setIsMaximized] = useState(false)

    // Focus input when terminal is open
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
        setOutput([])
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        processCommand(input)
        setHistory([...history, input])
        setHistoryIndex(-1)
        setInput('')
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (historyIndex < history.length - 1) {
                setHistoryIndex(historyIndex + 1)
                setInput(history[history.length - 1 - historyIndex - 1])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1)
                setInput(history[history.length - 1 - historyIndex + 1])
            } else if (historyIndex === 0) {
                setHistoryIndex(-1)
                setInput('')
            }
        } else if (e.key === 'Tab') {
            e.preventDefault()
            const commands = ['help', 'clear', 'home', 'about', 'projects', 'contact', 'ls', 'cd', 'cat', 'date', 'echo', 'whoami']
            const matchingCommands = commands.filter(cmd => cmd.startsWith(input))
            if (matchingCommands.length === 1) {
                setInput(matchingCommands[0])
            } else if (matchingCommands.length > 1) {
                setOutput([...output, '> ' + input, ...matchingCommands])
            }
        }
    }

    const processCommand = (cmd: string) => {
        const lowerCmd = cmd.toLowerCase().trim();
        const [command, ...args] = lowerCmd.split(' ');
        const index = parseInt(args[0], 10) - 1;
        setOutput([...output, `${currentDirectory} $ ${cmd}`]);

        switch (command) {
            case 'help':
                setOutput([...output, `${currentDirectory} $ ${cmd}`, 'Available commands:',
                    'help - Show this help message',
                    'clear - Clear the terminal',
                    'home - Go to home page',
                    'about - View about information',
                    'projects - List projects',
                    'experience - List experience',
                    'contact - View contact information',
                    'ls - List directory contents',
                    'cd - Change directory',
                    'cat - View file contents',
                    'date - Display current date and time',
                    'echo - Print text to the terminal',
                    'whoami - Display current user',
                    'exit - Close the terminal']);
                break;
            case 'clear':
                setOutput([]);
                break;
            case 'home':
            case 'about':
            case 'projects':
            case 'contact':
            case 'experience':
            case 'education':
                setActiveTab(command);
                setOutput([]);
                break;
            case 'ls':
                setOutput([...output, `${currentDirectory} $ ${cmd}`, 'home  about  projects  contact']);
                break;
            case 'cd':
                if (args[0] === '~' || args[0] === undefined) {
                    setCurrentDirectory('~');
                } else if (['home', 'about', 'projects', 'contact', 'experience', 'education'].includes(args[0])) {
                    setCurrentDirectory(`~/${args[0]}`);
                    setActiveTab(args[0]);
                } else {
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, `cd: ${args[0]}: No such file or directory`]);
                }
                break;
            case 'cat':
                if (args[0] === 'README.md') {
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, 'Welcome to my terminal portfolio!', 'Use the "help" command to see available commands.']);
                } else {
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, `cat: ${args[0]}: No such file or directory`]);
                }
                break;
            case 'date':
                setOutput([...output, `${currentDirectory} $ ${cmd}`, new Date().toString()]);
                break;
            case 'echo':
                setOutput([...output, `${currentDirectory} $ ${cmd}`, args.join(' ')]);
                break;
            case 'whoami':
                setOutput([...output, `${currentDirectory} $ ${cmd}`, 'Safoan Miah - Student Developer']);
                break;
            default:
                if (activeTab === 'projects' && !isNaN(index) && projects[index]) {
                    const project = projects[index];
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, `${project.name}: ${project.description}`, `GitHub: ${project.github}`]);
                } else if (activeTab === 'experience' && !isNaN(index) && experiences[index]) {
                    const experience = experiences[index];
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, `${experience.title}: ${experience.description}`]);
                } else if (activeTab === 'education' && !isNaN(index) && education[index]) {
                    const edu = education[index];
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, `${edu.degree} at ${edu.institution}, ${edu.year}`]);
                } else {
                    setOutput([...output, `${currentDirectory} $ ${cmd}`, `Command not found: ${command}. Type "help" for available commands.`]);
                }
        }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <pre className="text-accent-blue">
                        {`
 ____    _    _____ ___    _    _   _          __  __ ___    _    _   _ 
/ ___|  / \\  |  ___/ _ \\  / \\  | \\ | |        |  \\/  |_ _|  / \\  | | | |
\\___ \\ / _ \\ | |_ | | | |/ _ \\ |  \\| |        | |\\/| || |  / _ \\ | |_| |
 ___) / ___ \\|  _|| |_| / ___ \\| |\\  |        | |  | || | / ___ \\|  _  |
|____/_/   \\_\\_|   \\___/_/   \\_\\_| \\_|        |_|  |_|___/_/   \\_\\_| |_|
                                                                 
Welcome to my terminal portfolio!
Type "help" for available commands.
`}
                    </pre>
                )
            case 'about':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-2">About Me</h2>
                        <p>{aboutMe}</p>
                        <h3 className="text-lg font-bold mt-4 mb-2">Skills</h3>
                        <ul className="list-disc list-inside">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )
            case 'projects':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Projects</h2>
                        <ul className="list-decimal list-inside">
                            {projects.map((project) => (
                                <li key={project.id}>
                                    <span className="font-bold">{project.name}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-2">Type "project 1" or just "1" for more details.</p>
                    </div>
                )
            case 'experience':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Experience</h2>
                        <ul className="list-decimal list-inside">
                            {experiences.map((experience) => (
                                <li key={experience.id}>
                                    <span className="font-bold">{experience.title}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-2">Type "experience 1" or just "1" for more details.</p>
                    </div>
                )
            case 'contact':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                        <p>Email: {contacts.email}</p>
                        <p>GitHub: {contacts.github}</p>
                        <p>LinkedIn: {contacts.linkedin}</p>
                    </div>
                )
            case 'education':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Education</h2>
                        <ul className="list-decimal list-inside">
                            {education.map((edu) => (
                                <li key={edu.id}>
                                    <span className="font-bold">{edu.degree}</span> at {edu.institution}, {edu.year}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-2">Type "education 1" or just "1" for more details.</p>
                    </div>
                )
            default:
                return null
        }
    }

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className={`${isMaximized ? 'fixed inset-0' : 'w-1/2 h-3/4'
                            } bg-terminal-bg shadow-lg overflow-hidden flex flex-col terminal-portfolio z-50 rounded-lg`}
                    >
                        <div className="bg-dark-blue p-2 flex items-center">
                            <div className="flex space-x-2">
                                <button
                                    onClick={onClose}
                                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                                />
                                <button
                                    onClick={() => setIsMaximized(false)}
                                    className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                                />
                                <button
                                    onClick={toggleMaximize}
                                    className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                                />
                            </div>
                            <div className="flex-1 flex justify-center space-x-4">
                                {['home', 'about', 'projects', 'experience', 'contact', 'education'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleTabClick(tab)}
                                        className={`text-sm ${activeTab === tab ? 'text-accent-green' : 'text-gray-400'} hover:text-accent-green transition-colors`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 p-4 overflow-auto font-mono">
                            {renderContent()}
                            <div className="mt-4">
                                {output.map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>
                        </div>
                        <form onSubmit={handleInputSubmit} className="p-4 bg-dark-blue">
                            <div className="flex items-center">
                                <span className="text-accent-green mr-2">{currentDirectory} $</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent text-gray-300 focus:outline-none"
                                    autoFocus
                                />
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default TerminalPortfolio

