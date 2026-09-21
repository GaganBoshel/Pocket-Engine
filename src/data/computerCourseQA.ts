/**
 * Complete Basic Computer Course - 441 Questions & Answers
 * From HTML, CSS, JS, C, C++, Java, Python, Excel, Computer History, Practical Programming
 */

export interface CourseQA {
  id: number;
  category: string;
  q: string;
  a: string;
  code?: string;
  links: { title: string; url: string }[];
}

export const COMPUTER_COURSE_QA: CourseQA[] = [
  {
    "id": 1,
    "category": "Basic Computer",
    "q": "What is a computer?",
    "a": "A computer is an electronic device that accepts data, processes it, stores it, and produces useful information.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 2,
    "category": "Basic Computer",
    "q": "What are the main characteristics of a computer?",
    "a": "Speed, accuracy, storage capacity, automation, versatility, and consistency are major characteristics.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 3,
    "category": "Basic Computer",
    "q": "What are the advantages of computers?",
    "a": "Computers work quickly and accurately, store large amounts of data, automate tasks, and can perform many types of work.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 4,
    "category": "Basic Computer",
    "q": "What are the limitations of computers?",
    "a": "Computers cannot think independently like humans and depend on instructions, data, electricity, and correctly working hardware.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 5,
    "category": "Basic Computer",
    "q": "What are the basic parts of a computer?",
    "a": "Common parts include the CPU, monitor, keyboard, mouse, storage, memory, motherboard, and power supply.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 6,
    "category": "Basic Computer",
    "q": "What is hardware?",
    "a": "Hardware is the physical part of a computer that can be seen and touched.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 7,
    "category": "Basic Computer",
    "q": "What is software?",
    "a": "Software is a collection of programs and instructions that tells computer hardware what to do.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 8,
    "category": "Basic Computer",
    "q": "What is system software?",
    "a": "System software manages computer hardware and provides a platform for applications, such as an operating system.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 9,
    "category": "Basic Computer",
    "q": "What is application software?",
    "a": "Application software is designed to help users perform specific tasks, such as word processing or web browsing.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 10,
    "category": "Basic Computer",
    "q": "What is an operating system?",
    "a": "An operating system is system software that manages hardware, files, memory, processes, and applications.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 11,
    "category": "Basic Computer",
    "q": "Give examples of operating systems.",
    "a": "Windows, Linux, macOS, Android, and iOS are examples of operating systems.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 12,
    "category": "Basic Computer",
    "q": "What is a CPU?",
    "a": "CPU stands for Central Processing Unit. It executes instructions and performs calculations and logical operations.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 13,
    "category": "Basic Computer",
    "q": "What are the main components of CPU?",
    "a": "The major functional parts are the Arithmetic Logic Unit, Control Unit, and registers.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 14,
    "category": "Basic Computer",
    "q": "What is ALU?",
    "a": "ALU stands for Arithmetic Logic Unit. It performs arithmetic and logical operations.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 15,
    "category": "Basic Computer",
    "q": "What is CU?",
    "a": "CU stands for Control Unit. It directs and coordinates the operations of the computer.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 16,
    "category": "Basic Computer",
    "q": "What is a register?",
    "a": "A register is a very small, fast storage location inside the CPU used during processing.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 17,
    "category": "Basic Computer",
    "q": "What is RAM?",
    "a": "RAM stands for Random Access Memory. It temporarily stores data and programs currently being used.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 18,
    "category": "Basic Computer",
    "q": "What is ROM?",
    "a": "ROM stands for Read-Only Memory. It stores information that is retained when power is removed, traditionally including firmware.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 19,
    "category": "Basic Computer",
    "q": "Difference between RAM and ROM.",
    "a": "RAM is generally volatile and used for active work; ROM is non-volatile and commonly stores firmware or other persistent instructions.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 20,
    "category": "Basic Computer",
    "q": "What is cache memory?",
    "a": "Cache is very fast memory used to keep frequently needed data and instructions close to the CPU.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 21,
    "category": "Basic Computer",
    "q": "What is primary memory?",
    "a": "Primary memory is memory directly accessible by the CPU, mainly RAM and related high-speed memory.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 22,
    "category": "Basic Computer",
    "q": "What is secondary memory?",
    "a": "Secondary memory provides long-term storage, such as SSDs, hard drives, memory cards, and optical discs.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 23,
    "category": "Basic Computer",
    "q": "What is a hard disk?",
    "a": "A hard disk drive is a storage device that uses magnetic disks to store data.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 24,
    "category": "Basic Computer",
    "q": "What is an SSD?",
    "a": "An SSD is a solid-state storage device that uses flash memory and has no moving disk mechanism.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 25,
    "category": "Basic Computer",
    "q": "Difference between HDD and SSD.",
    "a": "HDDs use spinning magnetic disks, while SSDs use flash memory and are generally faster and more resistant to physical shock.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 26,
    "category": "Basic Computer",
    "q": "What is a motherboard?",
    "a": "A motherboard is the main circuit board that connects the CPU, memory, storage, expansion devices, and other components.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 27,
    "category": "Basic Computer",
    "q": "What is a keyboard?",
    "a": "A keyboard is an input device used to enter text, numbers, commands, and shortcuts.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 28,
    "category": "Basic Computer",
    "q": "What is a mouse?",
    "a": "A mouse is a pointing input device used to move a pointer and select or interact with items.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 29,
    "category": "Basic Computer",
    "q": "What is a monitor?",
    "a": "A monitor is an output device that displays text, images, video, and other information.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 30,
    "category": "Basic Computer",
    "q": "What is a printer?",
    "a": "A printer is an output device that produces a physical copy of digital information.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 31,
    "category": "Basic Computer",
    "q": "What is a scanner?",
    "a": "A scanner is an input device that converts physical documents or images into digital form.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 32,
    "category": "Basic Computer",
    "q": "What is a USB?",
    "a": "USB stands for Universal Serial Bus. It is a standard for connecting and communicating with peripherals and transferring data and power.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 33,
    "category": "Basic Computer",
    "q": "What is a file?",
    "a": "A file is a named collection of digital data stored on a computer or storage device.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 34,
    "category": "Basic Computer",
    "q": "What is a folder?",
    "a": "A folder is a container used to organize files and other folders.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 35,
    "category": "Basic Computer",
    "q": "What is a computer network?",
    "a": "A computer network is a group of connected devices that can communicate and share resources.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 36,
    "category": "Basic Computer",
    "q": "What is the Internet?",
    "a": "The Internet is a worldwide network of interconnected computer networks that communicate using common protocols.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 37,
    "category": "Basic Computer",
    "q": "What is a browser?",
    "a": "A web browser is software used to access and display websites and web applications.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 38,
    "category": "Basic Computer",
    "q": "What is a search engine?",
    "a": "A search engine is an online service that helps users find information on the web.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 39,
    "category": "Basic Computer",
    "q": "What is email?",
    "a": "Email is a system for sending and receiving electronic messages over computer networks.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 40,
    "category": "Basic Computer",
    "q": "What is a computer virus?",
    "a": "A computer virus is malicious software that can replicate by attaching to files or programs and may disrupt or damage systems.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 41,
    "category": "Basic Computer",
    "q": "What is antivirus software?",
    "a": "Antivirus software detects, blocks, and removes or quarantines many forms of malicious software.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 42,
    "category": "Basic Computer",
    "q": "What is malware?",
    "a": "Malware is a general term for malicious software designed to damage, disrupt, spy on, or gain unauthorized access to systems.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 43,
    "category": "Basic Computer",
    "q": "What is a password?",
    "a": "A password is a secret string used to authenticate a user or protect an account or resource.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 44,
    "category": "Basic Computer",
    "q": "What is cybersecurity?",
    "a": "Cybersecurity is the practice of protecting computers, networks, applications, and data from unauthorized access and attacks.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 45,
    "category": "Basic Computer",
    "q": "What is cloud computing?",
    "a": "Cloud computing provides computing resources such as storage, processing, and software over a network, usually the Internet.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 46,
    "category": "Basic Computer",
    "q": "What is an IP address?",
    "a": "An IP address is a numerical address used to identify an interface or device on an IP network.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 47,
    "category": "Basic Computer",
    "q": "What is Wi-Fi?",
    "a": "Wi-Fi is a family of wireless networking technologies based on IEEE 802.11 standards.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 48,
    "category": "Basic Computer",
    "q": "What is Bluetooth?",
    "a": "Bluetooth is a short-range wireless technology used to connect compatible devices.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 49,
    "category": "Basic Computer",
    "q": "What is LAN?",
    "a": "LAN stands for Local Area Network and connects devices within a limited area such as a home, school, or office.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 50,
    "category": "Basic Computer",
    "q": "What is WAN?",
    "a": "WAN stands for Wide Area Network and connects networks across larger geographic areas. 2. 2. HTML",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 51,
    "category": "HTML",
    "q": "What is HTML?",
    "a": "HTML stands for HyperText Markup Language and is used to structure content on web pages.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 52,
    "category": "HTML",
    "q": "What does HTML stand for?",
    "a": "HTML stands for HyperText Markup Language.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 53,
    "category": "HTML",
    "q": "What is an HTML tag?",
    "a": "An HTML tag is markup written inside angle brackets that defines or identifies an element.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 54,
    "category": "HTML",
    "q": "What is an HTML element?",
    "a": "An HTML element usually consists of a start tag, content, and an end tag, although some elements are void elements.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 55,
    "category": "HTML",
    "q": "What is an HTML attribute?",
    "a": "An attribute provides additional information or configuration for an HTML element, such as href or src.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 56,
    "category": "HTML",
    "q": "What is the basic structure of an HTML document?",
    "a": "A typical document contains <!DOCTYPE html>, html, head, and body elements.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 57,
    "category": "HTML",
    "q": "What is the purpose of DOCTYPE?",
    "a": "It tells the browser which document standard to use; in modern HTML, <!DOCTYPE html> activates standards mode.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 58,
    "category": "HTML",
    "q": "What is the html tag?",
    "a": "The html element is the root element containing the document's HTML content.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 59,
    "category": "HTML",
    "q": "What is the head tag?",
    "a": "The head contains metadata and resources such as the title, stylesheets, and scripts.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 60,
    "category": "HTML",
    "q": "What is the body tag?",
    "a": "The body contains the visible page content.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 61,
    "category": "HTML",
    "q": "What is the title tag?",
    "a": "The title element defines the document title shown in browser tabs and other contexts.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 62,
    "category": "HTML",
    "q": "What are heading tags?",
    "a": "Heading elements h1 through h6 represent headings at different levels.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 63,
    "category": "HTML",
    "q": "Difference between h1 and h6.",
    "a": "h1 represents the highest-level heading and h6 a lower-level heading.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 64,
    "category": "HTML",
    "q": "What is the p tag?",
    "a": "The p element represents a paragraph.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 65,
    "category": "HTML",
    "q": "What is the br tag?",
    "a": "The br element inserts a line break.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 66,
    "category": "HTML",
    "q": "What is the hr tag?",
    "a": "The hr element represents a thematic break, commonly displayed as a horizontal rule.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 67,
    "category": "HTML",
    "q": "How do you create a hyperlink?",
    "a": "Use an anchor element such as <a href='URL'>Link</a>.",
    "code": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Visit Website</a>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 68,
    "category": "HTML",
    "q": "How do you add an image?",
    "a": "Use an img element with a src attribute, such as <img src='image.jpg' alt='Description'>.",
    "code": "<img src=\"profile.jpg\" alt=\"User profile photo\" width=\"300\" height=\"200\">",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 69,
    "category": "HTML",
    "q": "What is the alt attribute?",
    "a": "alt provides alternative text describing an image when it cannot be seen and supports accessibility.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 70,
    "category": "HTML",
    "q": "What is an ordered list?",
    "a": "An ordered list uses ol and displays list items in a sequence.",
    "code": "<ol>\n  <li>First step</li>\n  <li>Second step</li>\n  <li>Third step</li>\n</ol>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 71,
    "category": "HTML",
    "q": "What is an unordered list?",
    "a": "An unordered list uses ul and normally displays list items with bullets.",
    "code": "<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 72,
    "category": "HTML",
    "q": "What is a description list?",
    "a": "A description list uses dl with dt terms and dd descriptions.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 73,
    "category": "HTML",
    "q": "How do you create a table?",
    "a": "Use table with rows and cells, commonly using tr, th, and td.",
    "code": "<table>\n  <tr>\n    <th>Name</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Alex</td>\n    <td>95</td>\n  </tr>\n</table>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 74,
    "category": "HTML",
    "q": "What are tr, th, and td?",
    "a": "tr defines a table row, th a header cell, and td a data cell.",
    "code": "<table>\n  <tr>\n    <th>Name</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Alex</td>\n    <td>95</td>\n  </tr>\n</table>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 75,
    "category": "HTML",
    "q": "What is a form?",
    "a": "A form collects user input for processing or submission.",
    "code": "<form action=\"/login\" method=\"POST\">\n  <label for=\"usr\">Email:</label>\n  <input type=\"email\" id=\"usr\" name=\"email\" required>\n  <label for=\"pwd\">Password:</label>\n  <input type=\"password\" id=\"pwd\" name=\"password\" required>\n  <button type=\"submit\">Sign In</button>\n</form>",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 76,
    "category": "HTML",
    "q": "What is an input field?",
    "a": "An input element provides a control for entering or selecting data.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 77,
    "category": "HTML",
    "q": "Difference between id and class.",
    "a": "An id identifies an element uniquely within a document; a class can be shared by multiple elements.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 78,
    "category": "HTML",
    "q": "What is semantic HTML?",
    "a": "Semantic HTML uses elements that communicate the meaning or role of their content.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 79,
    "category": "HTML",
    "q": "What are header, nav, main, and footer?",
    "a": "They are semantic elements representing a page header, navigation area, main content, and footer.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 80,
    "category": "HTML",
    "q": "What is an iframe?",
    "a": "An iframe embeds another HTML page or document inside the current page.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 81,
    "category": "HTML",
    "q": "What is HTML5?",
    "a": "HTML5 is the modern HTML standard that introduced many semantic elements and web capabilities.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 82,
    "category": "HTML",
    "q": "Difference between HTML and CSS.",
    "a": "HTML defines page structure and content; CSS controls presentation and layout.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 83,
    "category": "HTML",
    "q": "Difference between HTML and JavaScript.",
    "a": "HTML structures content, while JavaScript adds programming behavior and interactivity.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 84,
    "category": "HTML",
    "q": "What are comments in HTML?",
    "a": "Comments are notes ignored by the browser, written as <!-- comment -->.",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 85,
    "category": "HTML",
    "q": "How do you add a comment in HTML?",
    "a": "Write it between <!-- and -->. 3. 3. CSS",
    "links": [
      {
        "title": "MDN Web Docs: HTML",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "title": "W3C HTML5 Specification",
        "url": "https://html.spec.whatwg.org/"
      }
    ]
  },
  {
    "id": 86,
    "category": "CSS",
    "q": "What is CSS?",
    "a": "CSS stands for Cascading Style Sheets and controls the appearance and layout of web pages.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 87,
    "category": "CSS",
    "q": "What does CSS stand for?",
    "a": "CSS stands for Cascading Style Sheets.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 88,
    "category": "CSS",
    "q": "Why is CSS used?",
    "a": "CSS is used to style, position, size, color, and responsively arrange HTML content.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 89,
    "category": "CSS",
    "q": "What are the three types of CSS?",
    "a": "Inline, internal, and external CSS.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 90,
    "category": "CSS",
    "q": "What is inline CSS?",
    "a": "Inline CSS is written directly in an element's style attribute.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 91,
    "category": "CSS",
    "q": "What is internal CSS?",
    "a": "Internal CSS is written inside a style element in the document head.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 92,
    "category": "CSS",
    "q": "What is external CSS?",
    "a": "External CSS is stored in a separate .css file and linked to the HTML document.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 93,
    "category": "CSS",
    "q": "What is a CSS selector?",
    "a": "A selector identifies the HTML elements to which CSS rules should apply.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 94,
    "category": "CSS",
    "q": "What is an element selector?",
    "a": "It selects elements by their tag name, such as p or h1.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 95,
    "category": "CSS",
    "q": "What is a class selector?",
    "a": "A class selector targets elements with a particular class using a dot, such as .card.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 96,
    "category": "CSS",
    "q": "What is an ID selector?",
    "a": "An ID selector targets an element with a specific id using #, such as #header.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 97,
    "category": "CSS",
    "q": "What is the CSS box model?",
    "a": "The box model describes an element as content surrounded by padding, border, and margin.",
    "code": "/* CSS Box Model Calculation */\n.box {\n  width: 300px;       /* Content */\n  padding: 20px;      /* Inner Space */\n  border: 2px solid;  /* Border Line */\n  margin: 15px;       /* Outer Space */\n  box-sizing: border-box;\n}",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 98,
    "category": "CSS",
    "q": "What is margin?",
    "a": "Margin is space outside an element's border.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 99,
    "category": "CSS",
    "q": "What is padding?",
    "a": "Padding is space between an element's content and its border.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 100,
    "category": "CSS",
    "q": "What is border?",
    "a": "A border is a line or boundary around an element's padding and content.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 101,
    "category": "CSS",
    "q": "What is color property?",
    "a": "The color property sets the foreground or text color.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 102,
    "category": "CSS",
    "q": "What is background-color?",
    "a": "background-color sets an element's background color.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 103,
    "category": "CSS",
    "q": "How do you change font size?",
    "a": "Use the font-size property, for example font-size: 20px;.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 104,
    "category": "CSS",
    "q": "How do you change font family?",
    "a": "Use the font-family property to specify preferred typefaces.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 105,
    "category": "CSS",
    "q": "What is font-weight?",
    "a": "font-weight controls the thickness or emphasis of text.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 106,
    "category": "CSS",
    "q": "What is text-align?",
    "a": "text-align controls horizontal alignment of inline content within a box.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 107,
    "category": "CSS",
    "q": "What is display?",
    "a": "The display property controls how an element participates in layout.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 108,
    "category": "CSS",
    "q": "What is position?",
    "a": "The position property controls how an element is positioned in the document.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 109,
    "category": "CSS",
    "q": "What is Flexbox?",
    "a": "Flexbox is a one-dimensional CSS layout system for arranging and aligning items.",
    "code": ".flex-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 110,
    "category": "CSS",
    "q": "What is CSS Grid?",
    "a": "CSS Grid is a two-dimensional layout system for arranging items in rows and columns.",
    "code": ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 111,
    "category": "CSS",
    "q": "Difference between Flexbox and Grid.",
    "a": "Flexbox is mainly one-dimensional; Grid is designed for two-dimensional row-and-column layouts.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 112,
    "category": "CSS",
    "q": "What is a pseudo-class?",
    "a": "A pseudo-class selects an element based on a state or condition, such as :hover.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 113,
    "category": "CSS",
    "q": "What is :hover?",
    "a": ":hover applies styles while a pointing device is positioned over an element.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 114,
    "category": "CSS",
    "q": "What is border-radius?",
    "a": "border-radius rounds an element's corners.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 115,
    "category": "CSS",
    "q": "What is box-shadow?",
    "a": "box-shadow adds a shadow effect around an element's box.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 116,
    "category": "CSS",
    "q": "What is opacity?",
    "a": "opacity controls how transparent an element appears.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 117,
    "category": "CSS",
    "q": "What are CSS animations?",
    "a": "Animations allow CSS properties to change through defined keyframes over time.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 118,
    "category": "CSS",
    "q": "What are CSS transitions?",
    "a": "Transitions smoothly animate property changes between states.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 119,
    "category": "CSS",
    "q": "What is responsive design?",
    "a": "Responsive design makes a website adapt to different screen sizes and devices.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 120,
    "category": "CSS",
    "q": "What is a media query?",
    "a": "A media query applies CSS rules based on conditions such as viewport width.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 121,
    "category": "CSS",
    "q": "What is z-index?",
    "a": "z-index controls the stacking order of positioned elements.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 122,
    "category": "CSS",
    "q": "What is overflow?",
    "a": "overflow controls what happens when content exceeds an element's box.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 123,
    "category": "CSS",
    "q": "Difference between relative and absolute positioning.",
    "a": "Relative positioning keeps the element in normal flow while allowing offsets; absolute positioning removes it from normal flow and positions it relative to a containing block.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 124,
    "category": "CSS",
    "q": "What is rem?",
    "a": "rem is a CSS length unit relative to the root element's font size.",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 125,
    "category": "CSS",
    "q": "What are vh and vw?",
    "a": "vh represents one percent of viewport height and vw one percent of viewport width. 4. 4. JavaScript",
    "links": [
      {
        "title": "MDN Web Docs: CSS",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        "title": "CSS-Tricks Guides",
        "url": "https://css-tricks.com/"
      }
    ]
  },
  {
    "id": 126,
    "category": "JavaScript",
    "q": "What is JavaScript?",
    "a": "JavaScript is a programming language widely used to add dynamic behavior and interactivity to web pages.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 127,
    "category": "JavaScript",
    "q": "Where is JavaScript used?",
    "a": "It is used in browsers, servers, desktop tools, mobile apps, automation, and many other environments.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 128,
    "category": "JavaScript",
    "q": "How do you add JavaScript to HTML?",
    "a": "Use a script element, either with code inside it or with a src attribute pointing to a JavaScript file.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 129,
    "category": "JavaScript",
    "q": "What is a variable?",
    "a": "A variable is a named binding used to store or refer to a value.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 130,
    "category": "JavaScript",
    "q": "What is var?",
    "a": "var declares a function-scoped variable in JavaScript.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 131,
    "category": "JavaScript",
    "q": "What is let?",
    "a": "let declares a block-scoped variable whose value can be reassigned.",
    "code": "let score = 10;   // can reassign\nscore = 15;\n\nconst PI = 3.14159; // fixed binding\n// PI = 3.14; -> TypeError: Assignment to constant variable",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 132,
    "category": "JavaScript",
    "q": "What is const?",
    "a": "const declares a block-scoped binding that cannot be reassigned.",
    "code": "let score = 10;   // can reassign\nscore = 15;\n\nconst PI = 3.14159; // fixed binding\n// PI = 3.14; -> TypeError: Assignment to constant variable",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 133,
    "category": "JavaScript",
    "q": "Difference between let, const, and var.",
    "a": "let and const are block-scoped; const cannot be reassigned; var is function-scoped and has older declaration behavior.",
    "code": "let score = 10;   // can reassign\nscore = 15;\n\nconst PI = 3.14159; // fixed binding\n// PI = 3.14; -> TypeError: Assignment to constant variable",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 134,
    "category": "JavaScript",
    "q": "What are data types?",
    "a": "JavaScript has primitive types such as string, number, bigint, boolean, undefined, symbol, and null, plus objects.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 135,
    "category": "JavaScript",
    "q": "What is a string?",
    "a": "A string is a sequence of characters used to represent text.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 136,
    "category": "JavaScript",
    "q": "What is a number?",
    "a": "The number type represents numeric values, including integers and floating-point values.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 137,
    "category": "JavaScript",
    "q": "What is Boolean?",
    "a": "A Boolean value is either true or false.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 138,
    "category": "JavaScript",
    "q": "What is an array?",
    "a": "An array is an ordered collection of values accessed by numeric indexes.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 139,
    "category": "JavaScript",
    "q": "What is an object?",
    "a": "An object is a collection of properties, which can hold values and functions.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 140,
    "category": "JavaScript",
    "q": "What is null?",
    "a": "null represents an intentional absence of an object value.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 141,
    "category": "JavaScript",
    "q": "What is undefined?",
    "a": "undefined is the value of a variable or expression when no value has been assigned or returned in relevant cases.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 142,
    "category": "JavaScript",
    "q": "What is an operator?",
    "a": "An operator is a symbol or keyword that performs an operation on values.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 143,
    "category": "JavaScript",
    "q": "What are arithmetic operators?",
    "a": "They perform mathematical operations such as +, -, *, /, %, and **.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 144,
    "category": "JavaScript",
    "q": "What are comparison operators?",
    "a": "They compare values using operators such as ===, !==, <, >, <=, and >=.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 145,
    "category": "JavaScript",
    "q": "What are logical operators?",
    "a": "Logical operators include &&, ||, and ! for combining or negating conditions.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 146,
    "category": "JavaScript",
    "q": "What is an if statement?",
    "a": "An if statement executes code when a specified condition is true.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 147,
    "category": "JavaScript",
    "q": "What is else?",
    "a": "else provides an alternative block when the preceding condition is false.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 148,
    "category": "JavaScript",
    "q": "What is else if?",
    "a": "else if tests another condition when earlier conditions are false.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 149,
    "category": "JavaScript",
    "q": "What is a switch statement?",
    "a": "switch selects code to execute based on the value of an expression.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 150,
    "category": "JavaScript",
    "q": "What is a loop?",
    "a": "A loop repeatedly executes a block of code while a condition or iteration rule allows it.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 151,
    "category": "JavaScript",
    "q": "What is a for loop?",
    "a": "A for loop repeats code using an initialization, condition, and update expression.",
    "code": "for (let i = 0; i < 5; i++) {\n  console.log(\"Iteration number:\", i);\n}",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 152,
    "category": "JavaScript",
    "q": "What is a while loop?",
    "a": "A while loop repeats code as long as its condition remains true.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 153,
    "category": "JavaScript",
    "q": "What is a do-while loop?",
    "a": "A do-while loop executes its body at least once and then repeats while a condition is true.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 154,
    "category": "JavaScript",
    "q": "What is a function?",
    "a": "A function is a reusable block of code that can accept inputs and return a value.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 155,
    "category": "JavaScript",
    "q": "What is an arrow function?",
    "a": "An arrow function is a shorter function syntax using => and has lexical this behavior.",
    "code": "// Standard function\nconst add = (a, b) => a + b;\n\n// Arrow with block\nconst greet = (name) => {\n  return `Welcome back, ${name}!`;\n};",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 156,
    "category": "JavaScript",
    "q": "What is an event?",
    "a": "An event is an occurrence such as a click, key press, or page load that code can respond to.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 157,
    "category": "JavaScript",
    "q": "What is the DOM?",
    "a": "The Document Object Model represents an HTML document as a tree of objects that JavaScript can manipulate.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 158,
    "category": "JavaScript",
    "q": "What is getElementById()?",
    "a": "It returns the element with a specified id.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 159,
    "category": "JavaScript",
    "q": "What is querySelector()?",
    "a": "It returns the first element matching a specified CSS selector.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 160,
    "category": "JavaScript",
    "q": "How do you change HTML using JavaScript?",
    "a": "You can modify DOM properties such as textContent or innerHTML, depending on the task.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 161,
    "category": "JavaScript",
    "q": "How do you change CSS using JavaScript?",
    "a": "You can change styles through element.style or modify classes using classList.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 162,
    "category": "JavaScript",
    "q": "What is addEventListener()?",
    "a": "It attaches a function to run when a specified event occurs on an element or object.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 163,
    "category": "JavaScript",
    "q": "What is JSON?",
    "a": "JSON is a text-based data format commonly used to exchange structured data.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 164,
    "category": "JavaScript",
    "q": "What is localStorage?",
    "a": "localStorage provides browser storage for string key-value data that persists across browser sessions.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 165,
    "category": "JavaScript",
    "q": "What is error handling?",
    "a": "Error handling is the process of detecting and responding to runtime errors.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 166,
    "category": "JavaScript",
    "q": "What is try-catch?",
    "a": "try contains code that may throw an error; catch handles an error if one occurs.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 167,
    "category": "JavaScript",
    "q": "What is a callback function?",
    "a": "A callback is a function passed to another function to be called later.",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 168,
    "category": "JavaScript",
    "q": "What is a Promise?",
    "a": "A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.",
    "code": "async function fetchUserData(id) {\n  try {\n    const res = await fetch(`/api/user/${id}`);\n    if (!res.ok) throw new Error(\"HTTP error\");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Fetch failed:\", err);\n  }\n}",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 169,
    "category": "JavaScript",
    "q": "What is async/await?",
    "a": "async/await provides syntax for working with Promises in a more readable sequential style. 5. C Programming",
    "code": "async function fetchUserData(id) {\n  try {\n    const res = await fetch(`/api/user/${id}`);\n    if (!res.ok) throw new Error(\"HTTP error\");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Fetch failed:\", err);\n  }\n}",
    "links": [
      {
        "title": "MDN Web Docs: JavaScript",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "title": "JavaScript.info Tutorial",
        "url": "https://javascript.info/"
      }
    ]
  },
  {
    "id": 170,
    "category": "C Programming",
    "q": "What is C?",
    "a": "C is a general-purpose programming language widely used for systems programming and performance-oriented software.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 171,
    "category": "C Programming",
    "q": "Who developed C?",
    "a": "Dennis Ritchie developed C at Bell Labs in the early 1970s.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 172,
    "category": "C Programming",
    "q": "What are the features of C?",
    "a": "C is procedural, efficient, portable, structured, and provides low-level memory access through pointers.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 173,
    "category": "C Programming",
    "q": "What is a compiler?",
    "a": "A compiler translates source code into another form, commonly machine code or an intermediate representation that can be executed.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 174,
    "category": "C Programming",
    "q": "What is the structure of a C program?",
    "a": "A simple C program commonly contains headers, declarations, the main function, statements, and return code.",
    "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello World\\n\");\n    return 0;\n}",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 175,
    "category": "C Programming",
    "q": "What is #include?",
    "a": "#include is a preprocessing directive used to include declarations from another file.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 176,
    "category": "C Programming",
    "q": "What is stdio.h?",
    "a": "stdio.h is the standard C header that declares common input and output functions such as printf and scanf.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 177,
    "category": "C Programming",
    "q": "What is main()?",
    "a": "main is the function where execution begins in a hosted C program.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 178,
    "category": "C Programming",
    "q": "What is a variable?",
    "a": "A variable is a named object used to store a value that can change during program execution.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 179,
    "category": "C Programming",
    "q": "What are data types in C?",
    "a": "Common types include char, int, float, double, and void, along with derived and user-defined types.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 180,
    "category": "C Programming",
    "q": "What is int?",
    "a": "int is an integer data type.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 181,
    "category": "C Programming",
    "q": "What is float?",
    "a": "float is a floating-point type used for real-number values with single-precision representation.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 182,
    "category": "C Programming",
    "q": "What is char?",
    "a": "char is an integer type commonly used to store a character.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 183,
    "category": "C Programming",
    "q": "What is double?",
    "a": "double is a floating-point type generally providing more precision than float.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 184,
    "category": "C Programming",
    "q": "What is a constant?",
    "a": "A constant is a value intended not to change during a program's relevant execution.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 185,
    "category": "C Programming",
    "q": "What are keywords?",
    "a": "Keywords are reserved words with special meaning in the C language.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 186,
    "category": "C Programming",
    "q": "What are identifiers?",
    "a": "Identifiers are names given to program entities such as variables, functions, and structures.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 187,
    "category": "C Programming",
    "q": "What are operators?",
    "a": "Operators are symbols or tokens used to perform operations on values.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 188,
    "category": "C Programming",
    "q": "What are arithmetic operators?",
    "a": "They include +, -, *, /, and % for common arithmetic operations.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 189,
    "category": "C Programming",
    "q": "What are relational operators?",
    "a": "They compare values using operators such as <, >, <=, >=, ==, and !=.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 190,
    "category": "C Programming",
    "q": "What are logical operators?",
    "a": "They include &&, ||, and ! for logical conditions.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 191,
    "category": "C Programming",
    "q": "What is assignment operator?",
    "a": "The = operator assigns a value to an object; compound assignments such as += also exist.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 192,
    "category": "C Programming",
    "q": "What is printf()?",
    "a": "printf is a standard C function used to format and write output.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 193,
    "category": "C Programming",
    "q": "What is scanf()?",
    "a": "scanf is a standard C function used to read formatted input.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 194,
    "category": "C Programming",
    "q": "What is an if statement?",
    "a": "It executes a statement or block when a condition is true.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 195,
    "category": "C Programming",
    "q": "What is an if-else statement?",
    "a": "It chooses one block when a condition is true and another when it is false.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 196,
    "category": "C Programming",
    "q": "What is nested if?",
    "a": "A nested if is an if statement placed inside another conditional block.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 197,
    "category": "C Programming",
    "q": "What is a switch statement?",
    "a": "switch selects among multiple code paths based on an integer-like controlling expression.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 198,
    "category": "C Programming",
    "q": "What is a loop?",
    "a": "A loop repeats a block of code according to a condition or iteration rule.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 199,
    "category": "C Programming",
    "q": "What is a for loop?",
    "a": "A for loop combines initialization, condition, and update expressions for iteration.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 200,
    "category": "C Programming",
    "q": "What is a while loop?",
    "a": "A while loop repeats while its controlling condition is true.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 201,
    "category": "C Programming",
    "q": "What is a do-while loop?",
    "a": "A do-while loop executes once before testing its condition and then repeats if true.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 202,
    "category": "C Programming",
    "q": "What is an array?",
    "a": "An array is a contiguous collection of elements of the same type accessed by index.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 203,
    "category": "C Programming",
    "q": "What is a string?",
    "a": "In C, a string is a sequence of characters terminated by a null character.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 204,
    "category": "C Programming",
    "q": "What is a function?",
    "a": "A function is a named block of code that performs a task and can accept parameters and return a value.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 205,
    "category": "C Programming",
    "q": "What is recursion?",
    "a": "Recursion is when a function calls itself, directly or indirectly, with a base condition.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 206,
    "category": "C Programming",
    "q": "What is a pointer?",
    "a": "A pointer is an object that stores the address of another object or function.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 207,
    "category": "C Programming",
    "q": "What is a structure?",
    "a": "A structure is a user-defined type that groups members, potentially of different types.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 208,
    "category": "C Programming",
    "q": "What is a union?",
    "a": "A union is a user-defined type whose members share the same memory location.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 209,
    "category": "C Programming",
    "q": "Difference between structure and union.",
    "a": "Structure members generally have separate storage; union members share storage and only one representation occupies the storage at a time.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 210,
    "category": "C Programming",
    "q": "What is a header file?",
    "a": "A header file contains declarations and other information intended to be included in source files.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 211,
    "category": "C Programming",
    "q": "What is a comment?",
    "a": "A comment is text ignored by the compiler, written using // or /* ... */.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 212,
    "category": "C Programming",
    "q": "What is type casting?",
    "a": "Type casting explicitly converts a value from one type to another.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 213,
    "category": "C Programming",
    "q": "Difference between = and ==.",
    "a": "= performs assignment; == tests equality.",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 214,
    "category": "C Programming",
    "q": "Difference between ++i and i++.",
    "a": "Both increment i, but ++i increments before its value is used in the expression, while i++ uses the old value first. 6. C++",
    "links": [
      {
        "title": "cppreference.com (C)",
        "url": "https://en.cppreference.com/w/c"
      },
      {
        "title": "ISO C Standard Reference",
        "url": "https://www.iso-9899.info/"
      }
    ]
  },
  {
    "id": 215,
    "category": "C++",
    "q": "What is C++?",
    "a": "C++ is a general-purpose programming language that supports procedural, object-oriented, generic, and other programming styles.",
    "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\" << std::endl;\n    return 0;\n}",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 216,
    "category": "C++",
    "q": "Who developed C++?",
    "a": "Bjarne Stroustrup developed C++ at Bell Labs, beginning in the early 1980s.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 217,
    "category": "C++",
    "q": "Difference between C and C++.",
    "a": "C is primarily procedural, while C++ extends C with object-oriented and other programming features.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 218,
    "category": "C++",
    "q": "What is object-oriented programming?",
    "a": "OOP is a programming approach that organizes software around objects containing data and behavior.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 219,
    "category": "C++",
    "q": "What is a class?",
    "a": "A class is a user-defined type that defines data members and member functions.",
    "code": "class Car {\npublic:\n    std::string brand;\n    void honk() {\n        std::cout << \"Beep beep!\\n\";\n    }\n};\n\nint main() {\n    Car myCar; // Object\n    myCar.brand = \"Tesla\";\n    myCar.honk();\n}",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 220,
    "category": "C++",
    "q": "What is an object?",
    "a": "An object is an instance of a class.",
    "code": "class Car {\npublic:\n    std::string brand;\n    void honk() {\n        std::cout << \"Beep beep!\\n\";\n    }\n};\n\nint main() {\n    Car myCar; // Object\n    myCar.brand = \"Tesla\";\n    myCar.honk();\n}",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 221,
    "category": "C++",
    "q": "What is encapsulation?",
    "a": "Encapsulation combines data and related operations and controls access to internal details.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 222,
    "category": "C++",
    "q": "What is inheritance?",
    "a": "Inheritance allows a class to derive properties and behavior from another class.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 223,
    "category": "C++",
    "q": "What is polymorphism?",
    "a": "Polymorphism allows one interface or operation to work with objects or types in different ways.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 224,
    "category": "C++",
    "q": "What is abstraction?",
    "a": "Abstraction focuses on essential features while hiding unnecessary implementation details.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 225,
    "category": "C++",
    "q": "What is a constructor?",
    "a": "A constructor is a special member function used to initialize an object when it is created.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 226,
    "category": "C++",
    "q": "What is a destructor?",
    "a": "A destructor is a special member function called when an object is destroyed.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 227,
    "category": "C++",
    "q": "What is function overloading?",
    "a": "Function overloading defines multiple functions with the same name but different parameter lists.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 228,
    "category": "C++",
    "q": "What is operator overloading?",
    "a": "Operator overloading gives operators appropriate meanings for user-defined types.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 229,
    "category": "C++",
    "q": "What are the types of inheritance?",
    "a": "Common forms include single, multiple, multilevel, hierarchical, and hybrid inheritance.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 230,
    "category": "C++",
    "q": "What is single inheritance?",
    "a": "A derived class inherits from one base class.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 231,
    "category": "C++",
    "q": "What is multiple inheritance?",
    "a": "A derived class inherits from more than one base class.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 232,
    "category": "C++",
    "q": "What is multilevel inheritance?",
    "a": "A class derives from another derived class, forming a chain.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 233,
    "category": "C++",
    "q": "What is hierarchical inheritance?",
    "a": "Multiple derived classes inherit from one base class.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 234,
    "category": "C++",
    "q": "What is hybrid inheritance?",
    "a": "Hybrid inheritance combines two or more inheritance patterns.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 235,
    "category": "C++",
    "q": "What is a virtual function?",
    "a": "A virtual function enables dynamic dispatch when called through a base-class interface.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 236,
    "category": "C++",
    "q": "What is a friend function?",
    "a": "A friend function is not a member but can access a class's private and protected members when declared as a friend.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 237,
    "category": "C++",
    "q": "What is a template?",
    "a": "A template lets code work with types or values specified as parameters.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 238,
    "category": "C++",
    "q": "What is STL?",
    "a": "STL stands for Standard Template Library and provides reusable containers, algorithms, iterators, and related utilities.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 239,
    "category": "C++",
    "q": "What is a vector?",
    "a": "std::vector is a dynamic array container that can resize automatically.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 240,
    "category": "C++",
    "q": "What is a pointer?",
    "a": "A pointer stores an address or related pointer value and can be used to access another object.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 241,
    "category": "C++",
    "q": "What is a reference variable?",
    "a": "A reference is an alias for another object.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 242,
    "category": "C++",
    "q": "What is cin?",
    "a": "std::cin is the standard input stream used to read formatted input.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 243,
    "category": "C++",
    "q": "What is cout?",
    "a": "std::cout is the standard output stream used to write formatted output.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 244,
    "category": "C++",
    "q": "What is namespace?",
    "a": "A namespace groups names and helps prevent naming conflicts.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 245,
    "category": "C++",
    "q": "What is public?",
    "a": "public members can be accessed wherever the access rules permit.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 246,
    "category": "C++",
    "q": "What is private?",
    "a": "private members are accessible only from the class and its permitted friends.",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 247,
    "category": "C++",
    "q": "What is protected?",
    "a": "protected members are accessible within the class, its friends, and derived classes, subject to access rules. 7. Java",
    "links": [
      {
        "title": "cppreference.com (C++)",
        "url": "https://en.cppreference.com/w/cpp"
      },
      {
        "title": "isocpp.org Standard C++",
        "url": "https://isocpp.org/"
      }
    ]
  },
  {
    "id": 248,
    "category": "Java",
    "q": "What is Java?",
    "a": "Java is a general-purpose, class-based programming language designed to be portable through its virtual-machine ecosystem.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 249,
    "category": "Java",
    "q": "Who developed Java?",
    "a": "Java was developed at Sun Microsystems, with James Gosling as its principal original designer.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 250,
    "category": "Java",
    "q": "What are the features of Java?",
    "a": "Java is object-oriented, portable, strongly typed, automatically memory-managed, and supports concurrency and networking.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 251,
    "category": "Java",
    "q": "Why is Java platform independent?",
    "a": "Java source is compiled to bytecode that can run on compatible Java Virtual Machines on different platforms.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 252,
    "category": "Java",
    "q": "What is JVM?",
    "a": "JVM stands for Java Virtual Machine and executes Java bytecode.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 253,
    "category": "Java",
    "q": "What is JDK?",
    "a": "JDK stands for Java Development Kit and provides tools for developing Java programs, including a compiler.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 254,
    "category": "Java",
    "q": "What is JRE?",
    "a": "JRE refers to the runtime environment and libraries needed to run Java applications; modern distributions may package components differently.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 255,
    "category": "Java",
    "q": "Difference between JDK, JRE, and JVM.",
    "a": "JVM executes bytecode; the runtime environment supplies JVM plus runtime libraries; JDK adds development tools.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 256,
    "category": "Java",
    "q": "What is bytecode?",
    "a": "Bytecode is the intermediate instruction format produced by the Java compiler and executed by the JVM.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 257,
    "category": "Java",
    "q": "What is a class?",
    "a": "A class is a blueprint defining fields, methods, and behavior for objects.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 258,
    "category": "Java",
    "q": "What is an object?",
    "a": "An object is an instance of a class.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 259,
    "category": "Java",
    "q": "What is a method?",
    "a": "A method is a function-like member of a class.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 260,
    "category": "Java",
    "q": "What is a constructor?",
    "a": "A constructor initializes an object when it is created and has the same name as its class.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 261,
    "category": "Java",
    "q": "What are Java data types?",
    "a": "Java has primitive types such as int, double, char, and boolean, plus reference types.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 262,
    "category": "Java",
    "q": "What is a variable?",
    "a": "A variable is a named storage location or reference that holds a value.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 263,
    "category": "Java",
    "q": "What are access modifiers?",
    "a": "public, protected, private, and package-private access control visibility of classes and members.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 264,
    "category": "Java",
    "q": "What is inheritance?",
    "a": "Inheritance allows a class to extend another class and reuse or specialize its behavior.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 265,
    "category": "Java",
    "q": "What is polymorphism?",
    "a": "Polymorphism allows a common type or interface to refer to objects whose implementations behave differently.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 266,
    "category": "Java",
    "q": "What is encapsulation?",
    "a": "Encapsulation bundles state and behavior and controls direct access to internal state.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 267,
    "category": "Java",
    "q": "What is abstraction?",
    "a": "Abstraction exposes essential behavior while hiding implementation details.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 268,
    "category": "Java",
    "q": "What is an interface?",
    "a": "An interface defines a contract of methods and other members that implementing classes agree to provide.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 269,
    "category": "Java",
    "q": "What is method overloading?",
    "a": "Overloading provides methods with the same name but different parameter lists.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 270,
    "category": "Java",
    "q": "What is method overriding?",
    "a": "Overriding occurs when a subclass supplies a new implementation for an inherited overridable method.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 271,
    "category": "Java",
    "q": "What is an exception?",
    "a": "An exception is an event represented by an object that can disrupt normal program flow.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 272,
    "category": "Java",
    "q": "What is exception handling?",
    "a": "Exception handling uses mechanisms such as try, catch, finally, and throw to manage exceptional conditions.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 273,
    "category": "Java",
    "q": "What are try, catch, and finally?",
    "a": "try contains monitored code, catch handles matching exceptions, and finally runs cleanup code in normal exception-handling flows.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 274,
    "category": "Java",
    "q": "What is an array?",
    "a": "An array is a fixed-size indexed collection of elements of one declared type.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 275,
    "category": "Java",
    "q": "What is a String?",
    "a": "String is a Java class representing immutable sequences of characters.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 276,
    "category": "Java",
    "q": "What is a package?",
    "a": "A package groups related classes and interfaces and helps organize code and control access.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 277,
    "category": "Java",
    "q": "What is garbage collection?",
    "a": "Garbage collection automatically reclaims memory occupied by objects that are no longer reachable.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 278,
    "category": "Java",
    "q": "What is static?",
    "a": "static makes a member associated with the class rather than a particular object.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 279,
    "category": "Java",
    "q": "What is final?",
    "a": "final prevents reassignment of variables, overriding of methods, or inheritance of classes depending on where it is used.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 280,
    "category": "Java",
    "q": "What is this?",
    "a": "this refers to the current object in an instance context.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 281,
    "category": "Java",
    "q": "What is super?",
    "a": "super refers to the superclass portion of an object and can access superclass members or constructors.",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 282,
    "category": "Java",
    "q": "Difference between Java and C++.",
    "a": "Java relies on a JVM-based runtime and automatic memory management; C++ generally compiles to native code and gives more direct control over memory. 8. Python",
    "links": [
      {
        "title": "Oracle Java Documentation",
        "url": "https://docs.oracle.com/en/java/"
      },
      {
        "title": "OpenJDK Reference",
        "url": "https://openjdk.org/"
      }
    ]
  },
  {
    "id": 283,
    "category": "Python",
    "q": "What is Python?",
    "a": "Python is a high-level, general-purpose programming language known for readable syntax and a large standard library.",
    "code": "print(\"Hello World\")",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 284,
    "category": "Python",
    "q": "Who developed Python?",
    "a": "Guido van Rossum created Python and released its first public version in the early 1990s.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 285,
    "category": "Python",
    "q": "What are the features of Python?",
    "a": "Python has readable syntax, dynamic typing, automatic memory management, extensive libraries, and support for multiple programming styles.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 286,
    "category": "Python",
    "q": "Why is Python called a high-level language?",
    "a": "Its syntax abstracts many low-level machine details, making programs easier for humans to write and understand.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 287,
    "category": "Python",
    "q": "Why is Python called interpreted?",
    "a": "Python implementations commonly execute compiled bytecode through a runtime rather than directly running source code as native machine instructions.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 288,
    "category": "Python",
    "q": "What is a variable?",
    "a": "A variable name refers to an object or value in Python.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 289,
    "category": "Python",
    "q": "What are Python data types?",
    "a": "Common types include int, float, str, bool, list, tuple, set, dict, and NoneType.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 290,
    "category": "Python",
    "q": "What is an integer?",
    "a": "An integer is a whole-number value represented by Python's int type.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 291,
    "category": "Python",
    "q": "What is a float?",
    "a": "A float represents a floating-point number.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 292,
    "category": "Python",
    "q": "What is a string?",
    "a": "A string is an immutable sequence of Unicode characters.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 293,
    "category": "Python",
    "q": "What is a Boolean?",
    "a": "A Boolean is either True or False.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 294,
    "category": "Python",
    "q": "What is a list?",
    "a": "A list is an ordered, mutable collection.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 295,
    "category": "Python",
    "q": "What is a tuple?",
    "a": "A tuple is an ordered, immutable collection.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 296,
    "category": "Python",
    "q": "What is a set?",
    "a": "A set is a mutable collection of unique hashable elements.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 297,
    "category": "Python",
    "q": "What is a dictionary?",
    "a": "A dictionary stores key-value pairs.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 298,
    "category": "Python",
    "q": "Difference between list and tuple.",
    "a": "Lists are mutable; tuples are immutable.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 299,
    "category": "Python",
    "q": "What is an operator?",
    "a": "An operator performs an operation on values or objects.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 300,
    "category": "Python",
    "q": "What is an if statement?",
    "a": "It executes a block when a condition is true.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 301,
    "category": "Python",
    "q": "What is elif?",
    "a": "elif tests another condition if previous conditions were false.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 302,
    "category": "Python",
    "q": "What is a for loop?",
    "a": "A for loop iterates over items from an iterable.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 303,
    "category": "Python",
    "q": "What is a while loop?",
    "a": "A while loop repeats while its condition is true.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 304,
    "category": "Python",
    "q": "What is a function?",
    "a": "A function is a reusable block of code defined with def or another supported syntax.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 305,
    "category": "Python",
    "q": "What is a parameter?",
    "a": "A parameter is a named input defined by a function.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 306,
    "category": "Python",
    "q": "What is a return statement?",
    "a": "return exits a function and optionally sends a value back to its caller.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 307,
    "category": "Python",
    "q": "What is a module?",
    "a": "A module is a Python file or importable unit containing definitions and executable code.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 308,
    "category": "Python",
    "q": "What is a package?",
    "a": "A package is a way to organize related Python modules into a namespace.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 309,
    "category": "Python",
    "q": "What is import?",
    "a": "import makes names from a module or package available to a program.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 310,
    "category": "Python",
    "q": "What is exception handling?",
    "a": "It is the process of detecting and handling runtime exceptions.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 311,
    "category": "Python",
    "q": "What are try and except?",
    "a": "try contains code that may raise an exception; except handles selected exceptions.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 312,
    "category": "Python",
    "q": "What is a class?",
    "a": "A class defines a type and can contain data and methods.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 313,
    "category": "Python",
    "q": "What is an object?",
    "a": "An object is an instance of a class or another Python type.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 314,
    "category": "Python",
    "q": "What is inheritance?",
    "a": "Inheritance lets a class derive behavior and attributes from another class.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 315,
    "category": "Python",
    "q": "What is a constructor?",
    "a": "In Python, __init__ is commonly used to initialize a newly created instance.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 316,
    "category": "Python",
    "q": "What is self?",
    "a": "self conventionally refers to the current instance in an instance method.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 317,
    "category": "Python",
    "q": "What is lambda function?",
    "a": "A lambda is a small anonymous function expression.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 318,
    "category": "Python",
    "q": "What is list comprehension?",
    "a": "A list comprehension is a compact syntax for creating lists from an iterable with optional filtering.",
    "code": "# Python list comprehension\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x ** 2 for x in numbers if x % 2 == 0]\nprint(squares)  # [4, 16]",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 319,
    "category": "Python",
    "q": "What is indentation?",
    "a": "Indentation defines code blocks in Python and is syntactically significant.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 320,
    "category": "Python",
    "q": "Difference between Python and C.",
    "a": "Python emphasizes readability and high-level abstractions with dynamic typing; C is a compiled systems language with explicit low-level control.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 321,
    "category": "Python",
    "q": "Difference between Python and Java.",
    "a": "Python is dynamically typed and emphasizes concise syntax; Java is statically typed and typically runs on the JVM.",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 322,
    "category": "Python",
    "q": "What is PIP?",
    "a": "pip is a package-management tool commonly used to install Python packages from package indexes. 9. 9. Microsoft Excel",
    "links": [
      {
        "title": "Official Python 3 Documentation",
        "url": "https://docs.python.org/3/"
      },
      {
        "title": "Real Python Tutorials",
        "url": "https://realpython.com/"
      }
    ]
  },
  {
    "id": 323,
    "category": "Microsoft Excel",
    "q": "What is Microsoft Excel?",
    "a": "Excel is a spreadsheet application used to organize, calculate, analyze, and visualize data.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 324,
    "category": "Microsoft Excel",
    "q": "What is a spreadsheet?",
    "a": "A spreadsheet is a grid-based document used to store, calculate, and analyze data.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 325,
    "category": "Microsoft Excel",
    "q": "What is a workbook?",
    "a": "A workbook is an Excel file containing one or more worksheets.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 326,
    "category": "Microsoft Excel",
    "q": "What is a worksheet?",
    "a": "A worksheet is a single spreadsheet page made of rows and columns.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 327,
    "category": "Microsoft Excel",
    "q": "What is a cell?",
    "a": "A cell is the intersection of a row and a column where data can be entered.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 328,
    "category": "Microsoft Excel",
    "q": "What is a row?",
    "a": "A row is a horizontal series of cells identified by numbers.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 329,
    "category": "Microsoft Excel",
    "q": "What is a column?",
    "a": "A column is a vertical series of cells identified by letters.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 330,
    "category": "Microsoft Excel",
    "q": "What is a cell address?",
    "a": "A cell address identifies a cell using its column and row, such as A1.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 331,
    "category": "Microsoft Excel",
    "q": "What is a range?",
    "a": "A range is a group of selected cells, such as A1:C10.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 332,
    "category": "Microsoft Excel",
    "q": "What is a formula?",
    "a": "A formula is an expression entered into a cell to calculate a result.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 333,
    "category": "Microsoft Excel",
    "q": "What is a function?",
    "a": "A function is a predefined formula that performs a specific calculation.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 334,
    "category": "Microsoft Excel",
    "q": "What is SUM?",
    "a": "SUM adds numbers or cell values.",
    "code": "=SUM(A1:A10)\n=AVERAGE(B2:B20)\n=IF(C2 >= 50, \"Pass\", \"Fail\")",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 335,
    "category": "Microsoft Excel",
    "q": "What is AVERAGE?",
    "a": "AVERAGE calculates the arithmetic mean of supplied numbers.",
    "code": "=SUM(A1:A10)\n=AVERAGE(B2:B20)\n=IF(C2 >= 50, \"Pass\", \"Fail\")",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 336,
    "category": "Microsoft Excel",
    "q": "What is MAX?",
    "a": "MAX returns the largest value in a set of numbers.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 337,
    "category": "Microsoft Excel",
    "q": "What is MIN?",
    "a": "MIN returns the smallest value in a set of numbers.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 338,
    "category": "Microsoft Excel",
    "q": "What is COUNT?",
    "a": "COUNT counts cells containing numbers.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 339,
    "category": "Microsoft Excel",
    "q": "What is COUNTA?",
    "a": "COUNTA counts non-empty cells.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 340,
    "category": "Microsoft Excel",
    "q": "What is IF function?",
    "a": "IF returns one result when a condition is true and another when it is false.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 341,
    "category": "Microsoft Excel",
    "q": "What is COUNTIF?",
    "a": "COUNTIF counts cells that meet a specified condition.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 342,
    "category": "Microsoft Excel",
    "q": "What is SUMIF?",
    "a": "SUMIF adds cells that meet a specified condition.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 343,
    "category": "Microsoft Excel",
    "q": "What is VLOOKUP?",
    "a": "VLOOKUP searches the first column of a range and returns a value from a specified column in the same row.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 344,
    "category": "Microsoft Excel",
    "q": "What is XLOOKUP?",
    "a": "XLOOKUP searches a range and returns a corresponding value from another range, with flexible matching options.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 345,
    "category": "Microsoft Excel",
    "q": "What is sorting?",
    "a": "Sorting arranges data according to selected values or criteria.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 346,
    "category": "Microsoft Excel",
    "q": "What is filtering?",
    "a": "Filtering temporarily displays only rows that meet specified conditions.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 347,
    "category": "Microsoft Excel",
    "q": "What is conditional formatting?",
    "a": "Conditional formatting automatically changes cell formatting when specified rules are met.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 348,
    "category": "Microsoft Excel",
    "q": "What is data validation?",
    "a": "Data validation restricts or guides what users can enter into cells.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 349,
    "category": "Microsoft Excel",
    "q": "What is a chart?",
    "a": "A chart is a graphical representation of data.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 350,
    "category": "Microsoft Excel",
    "q": "What are common chart types?",
    "a": "Column, bar, line, pie, area, scatter, and other chart types are commonly available.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 351,
    "category": "Microsoft Excel",
    "q": "What is a pivot table?",
    "a": "A PivotTable summarizes and analyzes data interactively by grouping fields and calculating values.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 352,
    "category": "Microsoft Excel",
    "q": "What is the formula bar?",
    "a": "The formula bar displays and lets users edit the content or formula of the selected cell.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 353,
    "category": "Microsoft Excel",
    "q": "What is the name box?",
    "a": "The Name Box shows the selected cell or range reference and can be used to navigate to ranges.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 354,
    "category": "Microsoft Excel",
    "q": "What is a relative cell reference?",
    "a": "A relative reference changes when a formula is copied to another location.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 355,
    "category": "Microsoft Excel",
    "q": "What is an absolute cell reference?",
    "a": "An absolute reference stays fixed when a formula is copied, using dollar signs such as $A$1.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 356,
    "category": "Microsoft Excel",
    "q": "Difference between relative and absolute reference.",
    "a": "Relative references adjust when copied; absolute references remain fixed.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 357,
    "category": "Microsoft Excel",
    "q": "What is $A$1?",
    "a": "$A$1 is an absolute reference that locks both the column A and row 1.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 358,
    "category": "Microsoft Excel",
    "q": "How do you merge cells?",
    "a": "Select the cells and use the Merge Cells or Merge & Center command.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 359,
    "category": "Microsoft Excel",
    "q": "How do you freeze rows or columns?",
    "a": "Use View > Freeze Panes to keep selected rows or columns visible while scrolling.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 360,
    "category": "Microsoft Excel",
    "q": "How do you insert a chart?",
    "a": "Select the relevant data, then choose a chart from the Insert tab.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 361,
    "category": "Microsoft Excel",
    "q": "How do you protect a worksheet?",
    "a": "Use the Protect Sheet command and configure the allowed actions and optional password.",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 362,
    "category": "Microsoft Excel",
    "q": "How do you print an Excel sheet?",
    "a": "Use File > Print, choose the printer and settings, then print the worksheet or workbook. 10. 10. History of Computer",
    "links": [
      {
        "title": "Microsoft Support: Excel Formulas & Functions",
        "url": "https://support.microsoft.com/en-us/excel"
      },
      {
        "title": "ExcelJet Formula Guide",
        "url": "https://exceljet.net/"
      }
    ]
  },
  {
    "id": 363,
    "category": "History of Computer",
    "q": "What is the history of computers?",
    "a": "It is the development of calculating and computing devices from early manual tools to modern electronic and programmable computers.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 364,
    "category": "History of Computer",
    "q": "What was the Abacus?",
    "a": "The abacus is an ancient manual calculating device using beads or counters arranged on rods.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 365,
    "category": "History of Computer",
    "q": "Who invented the Pascaline?",
    "a": "Blaise Pascal developed the Pascaline in the 17th century.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 366,
    "category": "History of Computer",
    "q": "What was Pascaline?",
    "a": "The Pascaline was a mechanical calculator designed mainly for addition and subtraction.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 367,
    "category": "History of Computer",
    "q": "Who designed the Difference Engine?",
    "a": "Charles Babbage designed the Difference Engine.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 368,
    "category": "History of Computer",
    "q": "Who designed the Analytical Engine?",
    "a": "Charles Babbage designed the Analytical Engine, an early concept for a general-purpose programmable machine.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 369,
    "category": "History of Computer",
    "q": "Who is known as the Father of Computer?",
    "a": "Charles Babbage is commonly called the Father of the Computer because of his pioneering mechanical computer designs.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 370,
    "category": "History of Computer",
    "q": "Who is known as the first computer programmer?",
    "a": "Ada Lovelace is widely regarded as the first computer programmer for her work describing an algorithm for Babbage's Analytical Engine.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 371,
    "category": "History of Computer",
    "q": "What was Mark I?",
    "a": "Harvard Mark I was an early large electromechanical automatic calculator/computer completed in 1944.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 372,
    "category": "History of Computer",
    "q": "What was ENIAC?",
    "a": "ENIAC was an early general-purpose electronic digital computer completed in the 1940s.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 373,
    "category": "History of Computer",
    "q": "What was EDVAC?",
    "a": "EDVAC was an early stored-program electronic computer project associated with the development of stored-program architecture.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 374,
    "category": "History of Computer",
    "q": "What was UNIVAC?",
    "a": "UNIVAC I was an early commercial computer in the United States, delivered in 1951.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 375,
    "category": "History of Computer",
    "q": "What is a computer generation?",
    "a": "A computer generation is a broad period of computer development characterized by major technologies and design changes.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 376,
    "category": "History of Computer",
    "q": "How many generations of computers are commonly taught?",
    "a": "Five generations are commonly taught in introductory computer studies, although the boundaries and definitions vary.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 377,
    "category": "History of Computer",
    "q": "What are first-generation computers?",
    "a": "First-generation computers were early electronic computers mainly using vacuum tubes.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 378,
    "category": "History of Computer",
    "q": "What technology was used in first generation?",
    "a": "Vacuum tubes were the primary electronic switching technology.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 379,
    "category": "History of Computer",
    "q": "What are second-generation computers?",
    "a": "Second-generation computers used transistors and were generally smaller, more reliable, and more efficient than vacuum-tube systems.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 380,
    "category": "History of Computer",
    "q": "What technology was used in second generation?",
    "a": "Transistors were the main technology.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 381,
    "category": "History of Computer",
    "q": "What are third-generation computers?",
    "a": "Third-generation computers used integrated circuits and became more compact and capable.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 382,
    "category": "History of Computer",
    "q": "What technology was used in third generation?",
    "a": "Integrated circuits were the key technology.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 383,
    "category": "History of Computer",
    "q": "What are fourth-generation computers?",
    "a": "Fourth-generation computers are generally associated with microprocessors and the growth of personal computers.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 384,
    "category": "History of Computer",
    "q": "What technology was used in fourth generation?",
    "a": "Microprocessors and very-large-scale integrated circuits were major technologies.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 385,
    "category": "History of Computer",
    "q": "What are fifth-generation computers?",
    "a": "Fifth-generation is a commonly taught term associated with advanced computing, AI, natural-language processing, and parallel processing.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 386,
    "category": "History of Computer",
    "q": "What technology is associated with fifth generation?",
    "a": "AI techniques, advanced semiconductor technology, parallel processing, and related technologies are commonly associated with it.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 387,
    "category": "History of Computer",
    "q": "Difference between first and second generation.",
    "a": "First-generation systems used vacuum tubes; second-generation systems used transistors.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 388,
    "category": "History of Computer",
    "q": "Difference between third and fourth generation.",
    "a": "Third-generation systems centered on integrated circuits; fourth-generation systems centered on microprocessors and VLSI.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 389,
    "category": "History of Computer",
    "q": "What is Artificial Intelligence?",
    "a": "Artificial Intelligence is the field of creating systems that perform tasks associated with abilities such as learning, reasoning, perception, and language processing.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 390,
    "category": "History of Computer",
    "q": "What is the role of AI in fifth-generation computers?",
    "a": "AI is commonly described as a major goal or feature of fifth-generation computing concepts.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 391,
    "category": "History of Computer",
    "q": "How did computers change from mechanical to electronic?",
    "a": "Computers progressed from manual and mechanical calculation to electromechanical devices and then to fast electronic digital systems.",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 392,
    "category": "History of Computer",
    "q": "What are important milestones in computer history?",
    "a": "Examples include the abacus, Pascaline, Babbage's engines, punched-card systems, electromechanical machines, ENIAC, stored-program computers, transistors, integrated circuits, microprocessors, PCs, the Internet, and modern AI. 11. 11. Practical Programming Q&A",
    "links": [
      {
        "title": "Computer History Museum",
        "url": "https://computerhistory.org/"
      },
      {
        "title": "Britannica: History of Computing",
        "url": "https://www.britannica.com/technology/computer/History-of-computing"
      }
    ]
  },
  {
    "id": 393,
    "category": "Practical Programming Q&A",
    "q": "How do you print Hello World in C?",
    "a": "Use printf(\"Hello World\"); inside main, with the required header.",
    "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello World\\n\");\n    return 0;\n}",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 394,
    "category": "Practical Programming Q&A",
    "q": "How do you print Hello World in C++?",
    "a": "Use std::cout << \"Hello World\"; inside main.",
    "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\" << std::endl;\n    return 0;\n}",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 395,
    "category": "Practical Programming Q&A",
    "q": "How do you print Hello World in Java?",
    "a": "Use System.out.println(\"Hello World\"); inside main.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 396,
    "category": "Practical Programming Q&A",
    "q": "How do you print Hello World in Python?",
    "a": "Use print(\"Hello World\").",
    "code": "print(\"Hello World\")",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 397,
    "category": "Practical Programming Q&A",
    "q": "How do you add two numbers in C?",
    "a": "Read or assign two numeric variables and use their sum with the + operator.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 398,
    "category": "Practical Programming Q&A",
    "q": "How do you check even or odd in C?",
    "a": "Use the remainder operator: if n % 2 == 0, the number is even; otherwise it is odd.",
    "code": "#include <stdio.h>\n\nint main() {\n    int n = 7;\n    if (n % 2 == 0) {\n        printf(\"%d is Even\\n\", n);\n    } else {\n        printf(\"%d is Odd\\n\", n);\n    }\n    return 0;\n}",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 399,
    "category": "Practical Programming Q&A",
    "q": "How do you find the largest of three numbers?",
    "a": "Compare the three values using if/else conditions or a suitable maximum function.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 400,
    "category": "Practical Programming Q&A",
    "q": "How do you calculate factorial?",
    "a": "Multiply all positive integers from 1 through n, or use a recursive function with a base case.",
    "code": "// Factorial in JavaScript / C logic\nfunction factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // 120",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 401,
    "category": "Practical Programming Q&A",
    "q": "How do you generate Fibonacci numbers?",
    "a": "Start with 0 and 1 and repeatedly add the previous two numbers to produce the next number.",
    "code": "def fibonacci(n):\n    a, b = 0, 1\n    fib = []\n    for _ in range(n):\n        fib.append(a)\n        a, b = b, a + b\n    return fib\nprint(fibonacci(7)) # [0, 1, 1, 2, 3, 5, 8]",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 402,
    "category": "Practical Programming Q&A",
    "q": "How do you check a prime number?",
    "a": "A number greater than 1 is prime if it has no divisor other than 1 and itself; test divisors up to its square root.",
    "code": "def is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0: return False\n    return True",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 403,
    "category": "Practical Programming Q&A",
    "q": "How do you reverse a number?",
    "a": "Repeatedly take the last digit with modulo 10 and build the reversed number by multiplying the result by 10 and adding the digit.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 404,
    "category": "Practical Programming Q&A",
    "q": "How do you check a palindrome number?",
    "a": "Reverse the number and compare the reversed value with the original.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 405,
    "category": "Practical Programming Q&A",
    "q": "How do you sort an array?",
    "a": "Use a sorting algorithm such as selection sort, insertion sort, merge sort, quicksort, or a library sort.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 406,
    "category": "Practical Programming Q&A",
    "q": "How do you search an array?",
    "a": "Use linear search for a general array or binary search when the data is sorted.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 407,
    "category": "Practical Programming Q&A",
    "q": "How do you create an HTML login form?",
    "a": "Use a form with input fields for username/email and password and a submit control.",
    "code": "<form action=\"/login\" method=\"POST\">\n  <label for=\"usr\">Email:</label>\n  <input type=\"email\" id=\"usr\" name=\"email\" required>\n  <label for=\"pwd\">Password:</label>\n  <input type=\"password\" id=\"pwd\" name=\"password\" required>\n  <button type=\"submit\">Sign In</button>\n</form>",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 408,
    "category": "Practical Programming Q&A",
    "q": "How do you create a navigation bar?",
    "a": "Use semantic navigation markup such as nav with links, then style it using CSS.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 409,
    "category": "Practical Programming Q&A",
    "q": "How do you make a webpage responsive?",
    "a": "Use flexible layouts, relative units, responsive images, and CSS media queries.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 410,
    "category": "Practical Programming Q&A",
    "q": "How do you create a JavaScript calculator?",
    "a": "Create input or button controls and JavaScript event handlers that perform arithmetic and display results.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 411,
    "category": "Practical Programming Q&A",
    "q": "How do you create a digital clock with JavaScript?",
    "a": "Read the current time with Date, format it, display it, and update it periodically with setInterval.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 412,
    "category": "Practical Programming Q&A",
    "q": "How do you create a counter with JavaScript?",
    "a": "Store a numeric value and use button event handlers to increase, decrease, or reset it.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 413,
    "category": "Practical Programming Q&A",
    "q": "How do you create a Python calculator?",
    "a": "Read numbers and an operation, then use conditional logic or a mapping of operators to calculate the result.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 414,
    "category": "Practical Programming Q&A",
    "q": "How do you create a Python number guessing game?",
    "a": "Generate a random target number, repeatedly accept guesses, and give higher/lower feedback until the target is found.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 415,
    "category": "Practical Programming Q&A",
    "q": "How do you calculate a student's grade in Python?",
    "a": "Read marks, calculate the required total or average, and use if/elif conditions to select a grade range.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 416,
    "category": "Practical Programming Q&A",
    "q": "How do you add numbers in Excel?",
    "a": "Enter a formula such as =A1+B1 or use =SUM(A1:A10) for a range.",
    "code": "=SUM(A1:A10)\n=AVERAGE(B2:B20)\n=IF(C2 >= 50, \"Pass\", \"Fail\")",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 417,
    "category": "Practical Programming Q&A",
    "q": "How do you calculate average in Excel?",
    "a": "Use =AVERAGE(range), such as =AVERAGE(B2:B10).",
    "code": "=SUM(A1:A10)\n=AVERAGE(B2:B20)\n=IF(C2 >= 50, \"Pass\", \"Fail\")",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 418,
    "category": "Practical Programming Q&A",
    "q": "How do you find the highest value in Excel?",
    "a": "Use =MAX(range).",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 419,
    "category": "Practical Programming Q&A",
    "q": "How do you find the lowest value in Excel?",
    "a": "Use =MIN(range).",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 420,
    "category": "Practical Programming Q&A",
    "q": "How do you count numeric cells in Excel?",
    "a": "Use =COUNT(range).",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 421,
    "category": "Practical Programming Q&A",
    "q": "How do you make a basic Excel result using IF?",
    "a": "Use a formula such as =IF(B2>=40,\"Pass\",\"Fail\") and adjust the condition to your grading rules.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 422,
    "category": "Practical Programming Q&A",
    "q": "How do you save a computer document?",
    "a": "Use Save or Save As, choose a location and filename, and select the required file format.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 423,
    "category": "Practical Programming Q&A",
    "q": "How do you create a strong password?",
    "a": "Use a long, unique password or passphrase and avoid easily guessed personal information; a password manager can help.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 424,
    "category": "Practical Programming Q&A",
    "q": "How do you protect a computer from malware?",
    "a": "Keep the OS and applications updated, use reputable security tools, avoid suspicious files and links, and maintain backups.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 425,
    "category": "Practical Programming Q&A",
    "q": "How do you back up important files?",
    "a": "Keep copies on another storage device or trusted cloud service and periodically verify that the backups can be restored.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 426,
    "category": "Practical Programming Q&A",
    "q": "What is debugging?",
    "a": "Debugging is the process of finding, understanding, and fixing errors in a program.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 427,
    "category": "Practical Programming Q&A",
    "q": "What is an algorithm?",
    "a": "An algorithm is a finite, ordered set of steps for solving a problem or performing a task.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 428,
    "category": "Practical Programming Q&A",
    "q": "What is a flowchart?",
    "a": "A flowchart is a diagram that represents the steps and decision points of a process or algorithm.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 429,
    "category": "Practical Programming Q&A",
    "q": "What is source code?",
    "a": "Source code is human-readable program text written in a programming language.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 430,
    "category": "Practical Programming Q&A",
    "q": "What is an executable program?",
    "a": "An executable is a program in a form that a system can load and run, subject to the platform and runtime.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 431,
    "category": "Practical Programming Q&A",
    "q": "What is an IDE?",
    "a": "An IDE is an Integrated Development Environment that combines tools such as an editor, debugger, build tools, and project management.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 432,
    "category": "Practical Programming Q&A",
    "q": "What is Git?",
    "a": "Git is a distributed version-control system used to track changes in files and collaborate on software projects.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 433,
    "category": "Practical Programming Q&A",
    "q": "What is GitHub?",
    "a": "GitHub is a web platform for hosting and collaborating on Git repositories and software projects.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 434,
    "category": "Practical Programming Q&A",
    "q": "What is an API?",
    "a": "An API is an Application Programming Interface that defines how software components can communicate and use each other's functionality.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 435,
    "category": "Practical Programming Q&A",
    "q": "What is a database?",
    "a": "A database is an organized collection of data that can be stored, managed, and retrieved.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 436,
    "category": "Practical Programming Q&A",
    "q": "What is SQL?",
    "a": "SQL is a language used to define, query, manipulate, and manage data in relational database systems.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 437,
    "category": "Practical Programming Q&A",
    "q": "What is a URL?",
    "a": "A URL is a Uniform Resource Locator that identifies the location of a resource and how to access it.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 438,
    "category": "Practical Programming Q&A",
    "q": "What is HTTP?",
    "a": "HTTP is the Hypertext Transfer Protocol used for communication between web clients and servers.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 439,
    "category": "Practical Programming Q&A",
    "q": "What is HTTPS?",
    "a": "HTTPS is HTTP protected by TLS encryption and authentication mechanisms.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 440,
    "category": "Practical Programming Q&A",
    "q": "What is an IP address used for?",
    "a": "It identifies a network interface or endpoint so IP networks can route packets to the appropriate destination.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  },
  {
    "id": 441,
    "category": "Practical Programming Q&A",
    "q": "What is a domain name?",
    "a": "A domain name is a human-readable name used to identify an Internet service or resource, such as example.com.",
    "links": [
      {
        "title": "GeeksforGeeks Computer Science",
        "url": "https://www.geeksforgeeks.org/"
      },
      {
        "title": "DevDocs API Documentation",
        "url": "https://devdocs.io/"
      }
    ]
  }
];

export const COURSE_MODULES = [
  { id: 'all', label: 'All Topics (441)', count: 441 },
  { id: 'Basic Computer', label: 'Basic Computer', count: 50 },
  { id: 'HTML', label: 'HTML', count: 35 },
  { id: 'CSS', label: 'CSS', count: 40 },
  { id: 'JavaScript', label: 'JavaScript', count: 44 },
  { id: 'C Programming', label: 'C Programming', count: 45 },
  { id: 'C++', label: 'C++', count: 33 },
  { id: 'Java', label: 'Java', count: 35 },
  { id: 'Python', label: 'Python', count: 40 },
  { id: 'Microsoft Excel', label: 'Microsoft Excel', count: 40 },
  { id: 'History of Computer', label: 'History of Computer', count: 30 },
  { id: 'Practical Programming Q&A', label: 'Practical Programming', count: 49 },
];

/**
 * Searches the 441 Q&A dataset for the best match based on question text or keywords
 */
export function findBestQAMatch(query: string): CourseQA | null {
  const qClean = query.trim().toLowerCase();
  if (!qClean || qClean.length < 2) return null;

  // 1. Direct Q number search (e.g. "Q12", "Q1: What is a computer?", "q 55", "question 400")
  const qNumMatch = qClean.match(/^q(?:uestion)?\s*(\d+)/i);
  if (qNumMatch) {
    const num = parseInt(qNumMatch[1], 10);
    const found = COMPUTER_COURSE_QA.find(item => item.id === num);
    if (found) return found;
  }

  // 2. Exact or substring match in question
  const exactMatch = COMPUTER_COURSE_QA.find(
    item => item.q.toLowerCase() === qClean || item.q.toLowerCase().includes(qClean) || qClean.includes(item.q.toLowerCase())
  );
  if (exactMatch) return exactMatch;

  // 3. Keyword scoring
  const words = qClean.split(/[^a-z0-9_#+.-]+/i).filter(w => w.length > 2 && !['what', 'how', 'why', 'who', 'the', 'is', 'are', 'you', 'and', 'for', 'with'].includes(w));
  if (words.length === 0) return null;

  let bestScore = 0;
  let bestItem = null;

  for (const item of COMPUTER_COURSE_QA) {
    const qLower = item.q.toLowerCase();
    const aLower = item.a.toLowerCase();
    let score = 0;

    for (const w of words) {
      if (qLower.includes(w)) score += 3;
      else if (aLower.includes(w)) score += 1;
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  return bestScore >= 3 ? bestItem : null;
}
