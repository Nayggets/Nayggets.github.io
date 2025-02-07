

var curriculum =
    [
        '<h1 class="toAdd">My Resume<h1>',
        '<br>',
        '<div class="cv"><img src=\"./ressource/cv.jpg\" alt=\"my resume\"></div>',
    ]

var aboutme = [
    '<span>Hi I am Quentin Mélotte. and i\' am a computer science student, I\'m deeply passionate about embedded systems and extensively involved in network development. I\'ve established a foundational understanding of cybersecurity through platforms like Hack The Box or Root Me. Additionally, I have a grounding in video game development from participating in multiple game jams. </span>',
    '<br>',
    '<span>My primary aim is to unravel the origins of computing, grasping its construction and core functionalities. I\'m driven to create innovative projects and products, aspiring ultimately to launch an object of my own design into space.</span>',
    '<br>',
    '<span>In pursuit of this, I\'ve already developed an RTOS under STM32 (an embedded system), showcasing my practical expertise in the realm of embedded systems. My active involvement in the development of "VisioSpace," specifically managing the low-level networking layer, further solidifies my hands-on experience in network technologies.</span>',
    '<br>',
    '<span>Moreover, my engagement in various game jams, including the Code Game Jam for three consecutive years and the Global Game Jam, has significantly honed my skills in Unity, bolstering my understanding of game development principles.</span>',
    '<br>',
    '<span>Notably, I\'ve participated in the "24H des IUTs" competition where my team achieved a commendable top 4 position out of 26 competitors, illustrating my ability to collaborate effectively in a competitive setting.</span>',
    '<br>',
    '<span>Furthermore, I\'ve pursued 16 specialized courses and workshops in computer science, enhancing my theoretical knowledge and practical skills in various domains within the field of technology. These experiences collectively contribute to my goal of delving into computing\'s fundamental roots and ultimately creating pioneering projects for the future.</span>'
]
var start =
    [
         "     QQQQQQQQQ                                                                       tttt            iiii                         MMMMMMMM               MMMMMMMM                    lllllll                           tttt                   tttt                              ",
         "   QQ:::::::::QQ                                                                  ttt:::t           i::::i                        M:::::::M             M:::::::M                    l:::::l                        ttt:::t                ttt:::t                              ",
         " QQ:::::::::::::QQ                                                                t:::::t            iiii                         M::::::::M           M::::::::M                    l:::::l                        t:::::t                t:::::t                              ",
         "Q:::::::QQQ:::::::Q                                                               t:::::t                                         M:::::::::M         M:::::::::M                    l:::::l                        t:::::t                t:::::t                              ",
         "Q::::::O   Q::::::Q uuuuuu    uuuuuu      eeeeeeeeeeee    nnnn  nnnnnnnn    ttttttt:::::ttttttt    iiiiiii nnnn  nnnnnnnn         M::::::::::M       M::::::::::M    eeeeeeeeeeee     l::::l    ooooooooooo   ttttttt:::::ttttttt    ttttttt:::::ttttttt        eeeeeeeeeeee    ",
         "Q:::::O     Q:::::Q u::::u    u::::u    ee::::::::::::ee  n:::nn::::::::nn  t:::::::::::::::::t    i:::::i n:::nn::::::::nn       M:::::::::::M     M:::::::::::M  ee::::::::::::ee   l::::l  oo:::::::::::oo t:::::::::::::::::t    t:::::::::::::::::t      ee::::::::::::ee  ",
         "Q:::::O     Q:::::Q u::::u    u::::u   e::::::eeeee:::::een::::::::::::::nn t:::::::::::::::::t     i::::i n::::::::::::::nn      M:::::::M::::M   M::::M:::::::M e::::::eeeee:::::ee l::::l o:::::::::::::::ot:::::::::::::::::t    t:::::::::::::::::t     e::::::eeeee:::::ee",
         "Q:::::O     Q:::::Q u::::u    u::::u  e::::::e     e:::::enn:::::::::::::::ntttttt:::::::tttttt     i::::i nn:::::::::::::::n     M::::::M M::::M M::::M M::::::Me::::::e     e:::::e l::::l o:::::ooooo:::::otttttt:::::::tttttt    tttttt:::::::tttttt    e::::::e     e:::::e",
         "Q:::::O     Q:::::Q u::::u    u::::u  e:::::::eeeee::::::e  n:::::nnnn:::::n      t:::::t           i::::i   n:::::nnnn:::::n     M::::::M  M::::M::::M  M::::::Me:::::::eeeee::::::e l::::l o::::o     o::::o      t:::::t                t:::::t          e:::::::eeeee::::::e",
         "Q:::::O     Q:::::Q u::::u    u::::u  e:::::::::::::::::e   n::::n    n::::n      t:::::t           i::::i   n::::n    n::::n     M::::::M   M:::::::M   M::::::Me:::::::::::::::::e  l::::l o::::o     o::::o      t:::::t                t:::::t          e:::::::::::::::::e ",
         "Q:::::O  QQQQ:::::Q u::::u    u::::u  e::::::eeeeeeeeeee    n::::n    n::::n      t:::::t           i::::i   n::::n    n::::n     M::::::M    M:::::M    M::::::Me::::::eeeeeeeeeee   l::::l o::::o     o::::o      t:::::t                t:::::t          e::::::eeeeeeeeeee  ",
         "Q::::::O Q::::::::Q u:::::uuuu:::::u  e:::::::e             n::::n    n::::n      t:::::t    tttttt i::::i   n::::n    n::::n     M::::::M     MMMMM     M::::::Me:::::::e            l::::l o::::o     o::::o      t:::::t    tttttt      t:::::t    tttttte:::::::e           ",
         "Q:::::::QQ::::::::Q u:::::::::::::::uue::::::::e            n::::n    n::::n      t::::::tttt:::::ti::::::i  n::::n    n::::n     M::::::M               M::::::Me::::::::e          l::::::lo:::::ooooo:::::o      t::::::tttt:::::t      t::::::tttt:::::te::::::::e          ",
         " QQ::::::::::::::Q   u:::::::::::::::u e::::::::eeeeeeee    n::::n    n::::n      tt::::::::::::::ti::::::i  n::::n    n::::n     M::::::M               M::::::M e::::::::eeeeeeee  l::::::lo:::::::::::::::o      tt::::::::::::::t      tt::::::::::::::t e::::::::eeeeeeee  ",
         "   QQ:::::::::::Q     uu::::::::uu:::u  ee:::::::::::::e    n::::n    n::::n        tt:::::::::::tti::::::i  n::::n    n::::n     M::::::M               M::::::M  ee:::::::::::::e  l::::::l oo:::::::::::oo         tt:::::::::::tt        tt:::::::::::tt  ee:::::::::::::e  ",
         "     QQQQQQQQ::::QQ     uuuuuuuu  uuuu    eeeeeeeeeeeeee    nnnnnn    nnnnnn          ttttttttttt  iiiiiiii  nnnnnn    nnnnnn     MMMMMMMM               MMMMMMMM    eeeeeeeeeeeeee  llllllll   ooooooooooo             ttttttttttt            ttttttttttt      eeeeeeeeeeeeee  ",
         "             Q:::::Q                                                                                                                                                                                                                                                            ",
         "              QQQQQQ                                                                                                                                                                                                                                                            ",
    ]

var projets =
    [
        '<span class="command"> Project that i done on my Free Time. </span>',
        '<br>',
        '<span id="Topic"> You can type the name of the projects to see more details about-it and click on it to see the github page of the project</span>',
        '<br>',
        '<a target="_blank" href="https://github.com/Nayggets/Chip8_Emulator"> Chip8_Emulator </a>',
        '<span>I wanted to understand how to replicate the behavior of different computer systems, so I undertook this project to learn the basics.</span>',
        '<a target="_blank" href="https://github.com/Nayggets/C_Compiler">C_Compiler</a>',
        '<span>This project involved the development of software capable of translating a programming language so that it could be understood and executed by a computer.</span>',
        '<a target="_blank" href="https://github.com/Nayggets/peer_to_peer_chat">peer_to_peer_chat</a>',
        '<span> This is an application that allows you to chat with your friends directly, without relying on a central server.</span>',
        '<a target="_blank" href="https://github.com/Nayggets/RTOS_STM32">RTOS</a>',
        '<span>I wanted to understand what an RTOS is and what it stand for, So i made a simple RTOS that run on stm32</span>',
        '<a target="_blank" href="https://github.com/Nayggets/SecureFileBackupProtocol">SFBP</a>',
        '<span>During a course on service continuity at the IUT of Montpellier-Sète, the professor assigned us the final module project to create a remote file backup application</span>',
        '<a target="_blank" href="https://github.com/Nayggets/Shell">Shell</a>',
        '<span>I created a program capable of executing commands provided by a user according to Linux operating system.</span>',
        '<br>',
        '<span> And i have a lot of other project that i don\'t want reveal</span>',
    ]



var terminal =
    [ '<h1 class="toAdd">Shell</h1>',
        '<span class="command">Introduction:</span>',
        '<span>    Undertaking a profound exploration into the mechanics of low-level programming, I embarked on a project that involved coding a shell in the C language. This project served as a pivotal journey, delving deep into the fundamental operations of operating systems.</span>',
        '<br>',
        '<span class="command">Description of the Project and Shell\'s Functionality:</span>',
        '<span>    The shell project was a comprehensive endeavor aiming to emulate a basic command-line interface. Its core functionalities encompassed the implementation of fork exec mechanics, the handling of piping for inter-process communication, navigation commands such as \'cd\' for file system traversal, and the ability to parse and execute Bash commands.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    The motivation behind this project stemmed from a strong desire to grasp the intricate workings of operating systems at a granular level. By coding this shell, I aimed not only to comprehend the underlying mechanisms of process creation, execution, and communication but also to sharpen my skills in writing clean, efficient code. Moreover, the project offered a valuable opportunity to document and articulate code functionality in a clear and comprehensive manner.</span>',
        '<br>',
        '<span class="command">    Conclusion:</span>',
        '<span>    In conclusion, this endeavor was more than just crafting a functional shell; it was an immersive learning experience. It provided insights into the nuances of low-level programming, reinforcing the significance of precision, structure, and clarity in coding practices. This project not only enhanced my technical abilities but also underscored the importance of hands-on projects in solidifying understanding and skill development in the realm of software development.</span>',
        '<video class="centered" controls width="676" height="460"> <source id="video" src="./ressource/Shell.webm" type="video/webm"> </video>'
    ]

var sfbp =
    [   '<h1 class="toAdd">Secure File Backup Protocol</h1>',
        '<span class="command">Introduction:</span>',
        '<span>The development and conceptualization of the SFBP (Secure File Backup Protocol) stands as a significant project that I\'ve undertaken. This protocol, designed for secure file transmission to a dedicated backup server, aimed at optimizing file-related system actions such as reading, network transmission, and recursive folder operations. Built in C, both the software and protocol were crafted with the objective of enhancing my proficiency in C, understanding UNIX/Linux system standards, file naming conventions, and security protocols pertaining to backups and communications.</span>',
        '<br>',
        '<span class="command">Project Description</span>',
        '<span>The SFBP is a custom-designed protocol tailored for secure and efficient file transmission to a designated backup server. The software I developed using C implements this protocol, emphasizing optimization of system actions, including efficient file handling, recursive folder traversal, and secure network transmission.</span>',
        '<br>',
        '<span class="command">Reasons for the Project</span>',
        '<span>Several motivations drove the conceptualization and execution of the SFBP project: </span>',
        '<br>',
        '<span>Skill Enhancement in C: The project aimed to elevate my proficiency in C, particularly in optimizing system-level actions and leveraging its capabilities in handling file systems and networking.</span>',
        '<span>Understanding System Standards: Delving into UNIX/Linux standards regarding file structures, paths, and security protocols provided insights into industry-standard practices.</span>',
        '<span>Security and Efficiency Focus: Emphasizing security through TLS 1.3 and AES 256-bit encryption while optimizing file-related actions underscored a balanced focus on security and performance.</span>',
        '<br>',
        '<span class="command">Conclusion</span>',
        '<span>The development of the SFBP protocol and its implementation within a software application has been an enriching endeavor. It significantly contributed to my understanding of C optimization techniques, UNIX/Linux system standards, and security protocols pertaining to file backups and secure communications. Leveraging TLS 1.3 and AES encryption in a client-server architecture underscored the importance of robust security measures in modern data transmission protocols. This project stands as a testament to a comprehensive exploration of system-level actions, networking, and security within the realm of software development.</span>',
        '<video class="centered" controls width="730" height="516"> <source id="video" src="./ressource/SFBP.webm"> </video>'
    ]


var chip8_emulator =
    [ '<h1 class="toAdd">Chip8 Emulator</h1>',
        '<span class="command">Introduction:</span>',
        '<span>    Venturing into the development of a Chip-8 emulator using C++ has been an exciting endeavor for me. This project involved recreating the functionality of a Chip-8 virtual machine, enabling the execution of programs written in this historic programming language on modern systems.</span>',
        '<br>',
        '<span class="command">Description of the Project:</span>',
        '<span>    My Chip-8 emulator in C++ meticulously replicates the workings of a Chip-8 virtual machine by emulating its processor, memory, input/output, and screen. It encompasses an implementation of Chip-8 instructions and graphical rendering logic to display outcomes on the screen.</span>',
        '<span>     To achieve this, I had to break down the intricate steps of emulation, which included interpreting Chip-8 instructions, managing memory and registers, handling user inputs, and updating the screen to accurately reflect changes resulting from instruction execution.</span>',
        '<span>     This project demanded a comprehensive understanding of Chip-8 specifications and precise implementation of its functionalities to ensure seamless execution of programs written in Chip-8 language on the emulator.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    The decision to delve deeper into C++ by undertaking this project was motivated by several factors: </span>',
        '<span>    Enhancing C++ Proficiency: Exploring the nuances of emulation through C++ provided an opportunity to hone my existing C++ skills and dive into its advanced features.</span>',
        '<span>    Understanding Low-Level Systems: Developing an emulator enabled a deeper understanding of low-level systems and the intricacies of hardware and software interactions at a fundamental level.</span>',
        '<span>    Personal Interest in Retro Computing: Being passionate about the history of computing and gaming, creating an environment to run programs from older systems felt rewarding and engaging.  </span>',
        '<br>',
        '<span class="command">Conclusion:</span>',
        '<span>     The development of my Chip-8 emulator in C++ has been an incredibly enriching experience. It has allowed me to explore the depths of C++ programming, deepen my understanding of emulation, and present an intellectually stimulating challenge. This project stands as a significant milestone in my quest to expand my knowledge and proficiency in C++ programming.</span>',
        '<video class="centered" controls width="666" height="504"> <source id="video" src="./ressource/Chip8Demonstration.webm" type="video/webm"> </video>'
    ]

var RTOS_ON_STM32 =
    [   '<h1 class="toAdd">RTOS on STM32\n</h1>',
        '<span class="command">Introduction:</span>',
        '<span>    My journey into developing a Real-Time Operating System (RTOS) in C for the STM32 microcontroller board has been an enlightening experience. This project aimed at creating an RTOS to comprehend the functioning of operating systems dedicated to embedded systems while furthering my skills in C programming and hardware development.</span>',
        '<br>',
        '<span class="command">Description of the Project:</span>',
        '<span>    The RTOS I\'ve been crafting in C for the STM32 microcontroller board seeks to offer functionalities akin to those of established real-time operating systems. It involves managing tasks, prioritization, and scheduling to ensure timely execution in embedded systems. My focus has been on understanding and implementing scheduling algorithms crucial for real-time environments.</span>',
        '<span>     By leveraging the STM32 hardware capabilities, I\'ve delved into the intricacies of hardware-software interaction, learning how to optimize code for specific hardware configurations and how an operating system interacts with the underlying hardware.</span>',
        '<span>     Although this project is ongoing, the current phase involved laying the foundation for the RTOS. My next milestone is to develop a file system, a critical aspect to further enhance the capabilities of the operating system I\'m constructing.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    Several motivations drove my endeavor to build an RTOS:</span>',
        '<span>    Understanding Embedded OS: Developing an RTOS for the STM32 board aimed to unravel the complexities of operating systems tailored for embedded systems, providing insights into their design and functionality.</span>',
        '<span>    Deepening C and Hardware Skills: This project served as a platform to refine my C programming skills in a real-world context while exploring the intricate relationship between software and hardware in embedded systems.</span>',
        '<span>    Algorithmic Learning: Creating scheduling algorithms and managing task priorities within the RTOS framework significantly enhanced my understanding of real-time constraints and efficient resource allocation.</span>',
        '<br>',
        '<span class="command">Conclusion:</span>',
        '<span>    Crafting an RTOS for the STM32 microcontroller board has been an incredibly educational experience. It has provided me with valuable insights into the design intricacies of embedded operating systems, honed my C programming proficiency, and deepened my understanding of hardware-software interactions. While the project is ongoing, each stage brings new challenges and learnings, and the prospect of developing a file system marks an exciting next step in this exploration of embedded systems development. </span>'
    ]

var c_compiler =
    [   '<h1 class="toAdd">c_compiler(not finished)\n</h1>',
        '<span class="command">Introduction:</span>',
        '<span>    My endeavor into developing a C compiler coded in C itself has been an illuminating journey thus far. This project began with laying the groundwork for a C compiler by building the lexer and parser for the C language. These components served as a foundational step towards understanding tokenization, lexical analysis, parsing, and comprehending the core elements of the C language and its associated toolset.  </span>',
        '<br>',
        '<span class="command">Description of the Project:</span>',
        '<span>    The initial phase of this project focused on constructing the lexer and parser modules, pivotal components in the compilation process. The lexer, responsible for tokenization, breaks down the source code into meaningful tokens, while the parser analyzes the tokens\' structure to create a parse tree or an abstract syntax tree.</span>',
        '<span>     By immersing myself in the intricacies of lexer and parser development, I gained a deeper insight into how compilers process source code. Understanding these fundamental stages provided me with a comprehensive understanding of lexical analysis, grammatical structures, and how programming languages are dissected and understood by compilers.</span>',
        '<span>     This project not only honed my C programming skills but also deepened my understanding of the inner workings of the C language and the tools that constitute its development ecosystem.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    Several motivations fueled my pursuit of developing a C compiler coded in C:</span>',
        '<br>',
        '<span>    Comprehensive Understanding of C: Building a compiler from scratch provided an in-depth exploration of the intricacies of the C language, including its grammar, syntax, and structure.</span>',
        '<span>    Learning Compilation Techniques: Delving into lexer and parser construction offered a hands-on experience in compilation techniques, elucidating the process of transforming human-readable code into machine-executable instructions.</span>',
        '<span>    Tool Familiarization: Working on a compiler allowed me to familiarize myself with various tools and techniques involved in language processing, which are integral to the development of robust software.</span>',
        '<br>',
        '<span class="command">    Conclusion:</span>',
        '<span>    The inception of a C compiler, starting with the construction of the lexer and parser in C, has been an immensely educational undertaking. It has not only bolstered my proficiency in C programming but also provided a foundational understanding of compiler construction, language processing, and the intricate components that underpin the C language. As I progress further into developing this compiler, I anticipate delving deeper into compiler optimizations and code generation, making strides in understanding the compilation process in its entirety.</span>'


    ]




var peer_to_peer =
    [   '<h1 class="toAdd">Peer To Peer Chat (beginning state)\n</h1>',
        '<span class="command">Introduction:</span>',
        '<span>    Undertaking a profound exploration into the mechanics of low-level programming, I embarked on a project that involved coding a shell in the C language. This project served as a pivotal journey, delving deep into the fundamental operations of operating systems.</span>',
        '<br>',
        '<span class="command">Description of the Project </span>',
        '<span>    The shell project was a comprehensive endeavor aiming to emulate a basic command-line interface. Its core functionalities encompassed the implementation of fork exec mechanics, the handling of piping for inter-process communication, navigation commands such as \'cd\' for file system traversal, and the ability to parse and execute Bash commands.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    The motivation behind this project stemmed from a strong desire to grasp the intricate workings of operating systems at a granular level. By coding this shell, I aimed not only to comprehend the underlying mechanisms of process creation, execution, and communication but also to sharpen my skills in writing clean, efficient code. Moreover, the project offered a valuable opportunity to document and articulate code functionality in a clear and comprehensive manner.</span>',
        '<br>',
        '<span class="command">Conclusion:</span>',
        '<span>    In conclusion, this endeavor was more than just crafting a functional shell; it was an immersive learning experience. It provided insights into the nuances of low-level programming, reinforcing the significance of precision, structure, and clarity in coding practices. This project not only enhanced my technical abilities but also underscored the importance of hands-on projects in solidifying understanding and skill development in the realm of software development.</span>'


    ]

var future =
    [
        '<h1 class="toAdd">In the Future ?</h1>',
        '<br>',
        '<span class="command">My Future Study : </span>',
        '<span>I would like to enter an Engineering school To pursue a curriculum in Computer science low level oriented.</span>',
        '<span>To learn more about Boolean logic, Combinatory logic, Sequential Logic, modern computer architecture, Operating system, network development and architecture and embedded system.</span>',
        '<span>Be able to build my own product From hardware to software through the system. </span>',
        '<span>And Become Expert in embedded systems.</span>',
        '<br>',
        '<span class="command">My Future Career : </span>',
        '<span>I would like to actively work in the field of aerospace, specifically focusing on the technical aspect of embedded systems related to space.</span>',
        '<span>I believe that the space industry is rapidly evolving, offering opportunities to apply my current computer science knowledge within unique constraints and technologies not found elsewhere. </span>',
        '<span>The mere thought of a day when an embedded system, carrying my code and expertise, ventures into space fills me with hope and determination.</span>',
        '<br>',
        '<span class="command">My Future accomplishment project</span>',
        '<span>Since I began my journey in the world of computer science, I\'ve been envisioning a project that I dream of bringing to life—it\'s my goal for the future.</span>',
        '<span>For me, this would mark the true beginning of my adventure in computer science. Undoubtedly, this project will be the most monumental endeavor of my life.</span>',
        '<span>I dream of designing an entire computer from scratch, starting with creating each component (using VHDL or other languages) such as the CPU, RAM, motherboard, network card, and GPU.</span>',
        '<span>Once this is accomplished, I will delve into creating an assembler for the machine, akin to the x86 style. Subsequently, I\'ll undertake the development of a cross-compiler capable of directly compiling C code into this assembler language.</span>',
        '<span>Here is where the real fun of the project begins: crafting a multiprocess operating system and all that it entails—virtual memory, a file system of my own design, scheduling algorithms also of my own creation, drivers enabling communication with networks using standard protocols like TCP and UDP, and a shell encompassing the majority of UNIX commands.</span>',
        '<span>All that remains is to create a C compiler that compiles C programs directly into executables for my own OS on my self-made machine. This project would represent the culmination of my entire career in computer science.</span>'
    ]

var social =
    [
        '<a target="_blank" href="https://github.com/Nayggets">My Github</a>',
        '<a target="_blank" href="https://www.linkedin.com/in/quentin-m%C3%A9lotte-nayggets/">My Linkedin</a>',
        '<a target="_blank" href="https://www.root-me.org/Nayggets">My Rootme</a>',
        '<a target="_blank" href="mailto:quentin.melotte@etu.umontpellier.fr">quentin.melotte@etu.umontpellier.fr</a>',
    ]

var hobbies =
    [
        '<span class="command"> Hobbies and Passion. </span>',
        '<br>',     
        '<span class="command">Cars</span> One of my passion is sport cars',
        '<br>',
        '<span class="command">Sport</span> I like doing sport on my free time to destress',
        '<br>',
        '<span class="command">Tabletop role-playing game(TRPG)</span> I play Tabletop role-play game like Dungeon and dragon where i am the game master',
        '<br>',
        '<span class="command">Cooking</span> I love to cook and eat my creation',
        '<br>',
        '<span class="command">Music</span> I listen to a lot of music when i work',
        '<br>',
        '<span class="command">Computer_science</span> I love computer science ',
        '<br>',
        '<span class="command">Video_Game</span> I play video since I am three years-old',
    ]

var formations =
    [
        "<span id='Question'>BUT Computer science :</span>",
        "<span>Option : Deployment of secure and communicative applications.</span>",
        "<span>Post Bac : Bac+3</span>",
        "<span>ECTS : 180</span>",
        "<span>Level : 6</span>",
        "<span>University : Iut of Montpellier</span>",
        "<span>Initial Formation</span>",
        "<span id='Question'>3 Notion that I learned in:</span>",
        "<span id='Topic'>discrete mathematics : </span>",
        "<span>During my Bachelor of Technology (BUT) program, I had the opportunity to study discrete mathematics. This course allowed me to gain a deeper understanding of mathematical structures and their applications in computer science. I learned about topics such as graph theory, combinatorics, and number theory, and how they relate to various areas of computer science, such as algorithms, cryptography, and computer networks. This knowledge has proven to be invaluable in my career as a computer science professional, as I am able to apply these concepts to solve complex problems and develop innovative solutions. Overall, studying discrete mathematics has been a challenging and rewarding experience, and I am grateful for the opportunity to have learned about this fascinating field of study.</span>",
        '<br>',
        "<span id='Topic'>Programmation : </span>",

        "<span>During my studies, I had the opportunity to learn about both imperative programming and object-oriented programming. In terms of imperative programming, I studied the C language and its capabilities. This allowed me to develop a deeper understanding of imperative programming concepts and techniques such as loops, conditional statements, and functions. In addition to that, I also learned about system programming using C, which helped me gain insights into how computers interact with hardware and how low-level programming works.\n" +
        "\n" +
        "Regarding object-oriented programming, I studied the SOLID principles, which are a set of guidelines for creating robust, maintainable, and extensible software systems. These principles include Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle. By learning these principles, I was able to understand how to design and implement object-oriented software in a more efficient and effective manner.\n" +
        "\n" +
        "Furthermore, I also developed knowledge in RAII (Resource Acquisition Is Initialization) in C++, which is a programming technique that manages resources (such as memory or file handles) automatically through object lifetimes. This allowed me to gain a deeper understanding of how to manage resources effectively in object-oriented programming.\n" +
        "\n" +
        "Overall, my education in imperative programming with C and system programming, as well as my education in object-oriented programming with SOLID principles and knowledge in RAII(C++), have been instrumental in my career as a programmer, enabling me to develop complex and efficient software solutions.</span>",
        '<br>',
        "<span id='Topic'>Information System (Reix,Alter) : </span>",

        "<span>" +
        "During my studies, I delved into the world of Information Systems, which can be defined as \"an organized set of resources (people, data, and technology) that collects, transforms, and disseminates information in an organization to support decision-making and control\" (Reix, 1997).\n" +
        "\n" +
        "Through this definition, I learned that Information Systems are not just about technology, but also about the people and processes that are involved in collecting and utilizing data to support decision-making. This holistic approach to Information Systems emphasized the importance of understanding not only the technical aspects of information management but also the organizational context in which it is implemented.\n" +
        "\n" +
        "Furthermore, I gained an appreciation for the strategic importance of Information Systems in modern organizations. By providing timely and accurate information to support decision-making, Information Systems can help organizations gain a competitive advantage in a rapidly evolving business landscape.\n" +
        "\n" +
        "Overall, my education in Information Systems based on Reix's definition has enabled me to understand the crucial role of technology, people, and processes in managing information and supporting decision-making in organizations.</span>",

    ]

var valueAndMotivations =
    [
        '<span class="command">My main motivations :</span>',
        '<span>I want to do a work that make sens to me</span>',
        '<span>Having the possibility to exceed myself professionally.</span>',
        '<span>I desire To see the results of my work.</span>',
        '<span>Also Developing my skills and updating my potential.</span>',
        '<span>Success at my work</span>',
        '<span>Evolve myself</span>'
    ]


var info =
    [
        '<span class="command">Navigate through my portfolio is very simple, just enter the corresponding command from the list below:</span>',
        '<br>',
        '<span class="command">About-me</span> Who am I ?',
        '<br>',
        '<span class="command">Certifications</span> The Certifications that i got through online courses.',
        '<br>',
        '<span class="command">Events</span> The two major event of my career',
        '<br>',
        '<span class="command">Formations</span> What is my educational background ?',
        '<br>',
        '<span class="command">Hobbies</span> My hobbies and passion ' ,
        '<br>',
        '<span class="command">My-motivation</span> What are my motivations and value to do what i do',
        '<br>',
        '<span class="command">Projects</span> Want to see some of my realisations ?',
        '<br>',
        '<span class="command">Resume</span> Here is my resume as an apprentice designer-developer in Research and Development(R&D).',
        '<br>',
        '<span class="command">Social</span> Take a look of my social media',
        '<br>',
        '<span class="command">Skill</span> Listing of my skill',
        '<br>',
        '<span class="command">The-Future</span> Future Plans',
    ]

var skill =
    [
        '<span class="command">Programming Language</span>',
        '<span>C++</span>',
        '<span>C</span>',
        '<span>C#</span>',
        '<span>Java</span>',
        '<span>Bash</span>',
        '<span>x86 Assembly</span>',
        '<span class="command">Operating System</span>',
        '<span>Unix</span>',
        '<span>BSD</span>',
        '<span>Windows</span>',
        '<span>Linux</span>',
        '<span class="command">The microprocessors on which I have already developed.</span>',
        '<span>Stm32</span>',
        '<span>Arduino</span>',
        '<span>Raspberry pi</span>',
        '<span class="command">Mechanism or software of which I know the internal workings.</span>',
        '<span>Operating System</span>',
        '<span>Real Time Operating System</span>',
        '<span>Compilation</span>',
        '<span>HTTP/HTTPS</span>',
        '<span>TCP/IP</span>',
        '<span>UDP/IP</span>',
        '<span>RTSP/RTSPS</span>',
        '<span>RTP/SRTP</span>',
        '<span>SSL/TLS</span>', 
        '<span>AES</span>',
        '<span>RSA and El gamal</span>',
        '<span>Embedded System</span>',
        '<span class="command">Development environment tools.</span>',
        '<span>Git</span>',
        '<span>GitHub</span>',
        '<span>GitHub Action</span>',
        '<span>Docker</span>',
        '<span>GDB</span>',
        '<span>Valgrind</span>',
        '<span>Makefile</span>',
        '<span>Mingw/Clang</span>',
        '<span>Visual Studio</span>',
        '<span>Visual Studio code</span>',
        '<span class="command">Framework or Library</span>',
        '<span>Unity</span>',
        '<span>QT</span>',
        '<span>JavaFx</span>',
        '<span>SDL</span>',
        '<span>SFML</span>',
        '<span>OpenSSL/libssldev</span>',
        '<span class="command">Other Skill or Tools</span>',
        '<span>System Management</span>',
        '<span>Network management</span>',
        '<span>Hdl</span>',
        '<span>Chatgpt 3.5</span>'


    ]

var events = 
    [
        '<span class="command">The main competitions/events that have marked my student career :</span>',
        '<br>',
        '<span class="command">ActInSpace</span>',
        '<br>',
        '<span class="command">24H des IUTS informatique(24HIUT)</span>'
/*
        '<span class="command">Code game jam</span>',
        '<span class="command">Global game jam</span>',
        '<span class="command">Nuit de l\'informatique'
*/    
    ]

var ActInSpace =
    [
        '<h1 class="toAdd">ActInSpace</span>',
        '<span class="command">What is ActInSpace</span>',
        '<span>ActInSpace is an international innovation contest organized by the French Space Agency (CNES) and the European Space Agency (ESA), in collaboration with various partners. The contest is designed to encourage entrepreneurship and the development of innovative solutions based on space technologies.</span>',
        '<span>ActInSpace brings together students, entrepreneurs, developers, and creative minds from around the world to work on challenges related to space applications. Participants form teams and have a limited amount of time to brainstorm, develop, and present their ideas to a panel of judges.</span>',
        '<span class="command">My adventure</span>',
        '<span>I participated in the 2022 edition of ActInSpace in Montpellier and the national competition in France. It all started in Montpellier with a team of five friends, including myself. We chose one of the challenges from the list and developed a startup idea called "gnssafe." After a night of brainstorming, the presentation day arrived, and I was designated as the pitcher by my team. I presented the project pitch, which was ultimately selected as the winning design by the Montpellier judges.</span>',
        '<span>In early 2023, the national edition took place in Cannes. By then, our project had progressed, and the startup was almost ready to be established. Unfortunately, we did not make it past the semi-finals of the competition, but it remained a significant learning experience for me in terms of presenting and pitching. I gained valuable insights into the startup process, including aspects such as business canvas, market research, reaching out to potential clients, and developing a minimum viable product (MVP).</span>',
        '<img src="./ressource/ActInSpace.jpg" alt="Certifications de victoire">'
    ]

var IutH =
    [   
        '<h1 class="toAdd>24H des IUTS informatique</h1>',
        '<span class="command">What does the \'24H des IUT\' in computer science entail?</span>',
        '<span>The "24H des IUT Informatique" is an annual 24-hour challenge organized by the University Institutes of Technology (IUTs) in the field of computer science. During this event, teams engage in projects and problem-solving activities aligned with their academic disciplines, fostering creativity, teamwork, and problem-solving skills within the given 24-hour timeframe.</span>',
        '<span>Notably, the 2023 edition, in which I actively participated, followed a comprehensive structure, featuring an 8-hour algorithmic challenge, an 8-hour web development challenge, and an 8-hour cybersecurity challenge. Throughout these specific timeframes, participating teams showcased their proficiency in algorithmic problem-solving, web development, and cybersecurity knowledge within the competition\'s framework. This format provided students, including myself, with the opportunity to demonstrate their expertise across various facets of computer science during the 24-hour event.</span>',
        '<span class="command">My participation</span>',
        '<span>During my participation in the "24H des IUT" with my team GLAB, we finished 3rd in the web challenge, where my involvement was more focused on ideation and project presentation than on the web development itself. Next was the algorithmic challenge, which turned out to be our setback, landing us in 18th place. However, in the cybersecurity challenge, I excelled in reverse engineering, OSINT (Open-source intelligence), network analysis, and website attacks, leading us to a 4th-place finish.</span>',
        '<img src="./ressource/algorithmResult.jpg"><img src="./ressource/webResult.jpg"><img src="./ressource/cybersecurityResult.jpg"'
    ]

var certifications =
    [
        '<h1 class="toAdd">Walls of certifications</h1>',
        '<br>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-ecc3a156-97fe-4471-a384-e1fcbf557f7d/"><img src="./ressource/Assembly2.png" alt="Complete x86 Assembly Programming | 120+ Pratical Exercises"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-c2f42c2a-bc63-426f-b54c-bc1b611409e4/"><img src="./ressource/Assembly1.png" alt="x86 Assembly Language Programming From Ground Up"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-ca08d4d2-fa68-4499-ae30-bb26d4d970dc/"><img src="./ressource/OpSystem4.png" alt="Operating Systems Final Part(4) : File Systems & Threads"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-80a24a26-c191-4d01-9dd5-3093ef515ded/"><img src="./ressource/OpSystem3.png" alt="Operating Systems Part3 : Syncronization and Deadlock"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-f7280ecc-2f58-416d-9bf7-c05e2b553c09/"><img src="./ressource/OpSystem2.png" alt="Operating Systems from Scratch - Part 2"></a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-43da2f22-339e-4989-8036-be64ef0703d9/"><img src="./ressource/OpSystem1.png" alt="Operating Systems from Scratch - Part 1"></a><a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/L9AC5PC3KKEU"><img src="./ressource/nand2tetris2.png" alt="Build a Modern Computer from First Principles: Nand to Tetris Part II(Project-Centered Course)"></a><a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/M47E5GEHKMHW"><img src="./ressource/nand2tetris1.png" alt="Build a Modern Computer from First Principles: Nand to Tetris (Project-Centered Course)"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-2c482f21-92aa-4aa0-a91f-1ec06a7d1aed/"><img src="./ressource/Create8ChipEmulator.jpg" alt="Creating a Chip-8 Emulator in C"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-dac218f4-f83b-4a09-8330-07a68caee180/"><img src="./ressource/Compiler_c.png" alt="Creating a C Compiler From Scratch Module 1"></a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-14916329-3e02-4811-83c3-ab57fc1056cb/"><img src="./ressource/RTOSFromGroundUpOnArm.jpg" alt="Build Your Own RealTime OS (RTOS) From Ground Uptm on ARM"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-a4fa3926-2d92-4714-a999-e0e2663245ef/"><img src="./ressource/LinuxBootcamp.jpg" alt="The Linux Command Line Bootcamp: Beginner To Power User"</a><a target="_blank" href="https://www.udemy.com/certificate/UC-f75bb1c2-5ecb-4f58-a0c5-d2c35991eb05/"><img src="./ressource/FormationCICD.jpg" alt="Formation DevOps, CI/CD de A à Z"></a><a target="_blank" href="https://www.udemy.com/certificate/UC-3444d346-2092-4cda-bada-289b286ec551/"><img src="./ressource/GithubBootcamp.jpg" alt="The Git & Github Bootcamp"></a>',
        '<br>',
    ]

function createLine(text) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === " ") {
            t += "&nbsp;";
        } else {
            t += text.charAt(i);
        }
    }
    return t;
}
function started()
{
    var clas = document.getElementById("terminalResultsCont");
    var doc = document.createElement("span");
    doc.className = 'toAdd';
    doc.id = 'title';
    doc.class
    start.forEach(value => {
        doc.innerHTML += createLine(value) + "\n";
    })

    clas.appendChild(doc);
}
//started();

var number = 0;
var index = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */
var text;
function typeWriter() {
    if (index < text.length) {
        console.log(number);
        document.getElementsByClassName("toAdd")[number].innerHTML += text.charAt(index);
        index++;
        window.setTimeout(typeWriter, speed);
    }
}
document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
        evt.preventDefault(); // Preventing the form from submitting
        const start = document.getElementById('terminalResultsCont');

        checkWord(); // Do your magic and check the entered word/sentence
    }

    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();

    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();

    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalResultsCont').innerHTML;

    // Clear text input
    var clearInput = function(){
        document.getElementById('terminalTextInput').value = "";

    }



    // Add text to the results div
    var addTextToResults = function(textToAdd){
        document.getElementById('terminalResultsCont').innerHTML += "<div class='toAdd'>" + textToAdd + "</div>";

    }

    /*
    var addTextToResults =  function (textToAdd) {


        document.getElementById('terminalResultsCont').innerHTML += "<p class='toAdd'></p>";

        index = 0;
        text = textToAdd;
        text.length = textToAdd.length;

        window.setTimeout(typeWriter,speed);
        /*
        for (let i = 0; i < textToAdd.length; i++) {
            window.setTimeout((textToAdd,i) => {
                console.log(textToAdd);
                console.log(i);
                document.getElementById('textToAdd').innerHTML += textToAdd.charAt(i);
                },50,textToAdd,i);
        }
        */
/*
    }
*/



    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function(){
        // Array of all the help keywords
        info.forEach(value => {
            addTextToResults(value);
        })
    }

    // Getting the time and date and post it depending on what you request for


    // Opening links in a new window

    function about_me()
    {
        started();
        clearInput();
        aboutme.forEach(value => {
            addTextToResults(value);
        })
    }
    // Having a specific text reply to specific strings
    var textReplies = function() {

        switch(textInputValueLowerCase){
            // replies
            case "resume":
                clearInput();
                curriculum.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "hobbies":
                clearInput();
                hobbies.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "about-me":
                about_me();
                break;
            case "social":
                clearInput();
                social.forEach(value => {
                    addTextToResults(value);

                })
                break;
            case "the-future":
                clearInput();
                future.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "formations":
            {
                clearInput();
                formations.forEach(value => {
                    addTextToResults(value);
                })
                break;
            }
            case "help":
            case "?":
                clearInput();
                postHelpList();
                break;
            case "certifications":
                clearInput();
                certifications.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "my-motivation":
                clearInput();
                valueAndMotivations.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "sfbp":
            {
                clearInput();
                sfbp.forEach(value => {
                    addTextToResults(value);
                })
                break;
            }
            case "projects":
                clearInput();
                projets.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "c_compiler":
                clearInput();
                c_compiler.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "peer_to_peer_chat":
                clearInput();
                peer_to_peer.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "rtos":
                clearInput();
                RTOS_ON_STM32.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "chip8_emulator":
                clearInput();
                chip8_emulator.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "shell":
                clearInput();
                terminal.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "24Hiut":
                clearInput();
                IutH.forEach(value => {
                    addTextToResults(value);
                })
                break;
            case "actinspace":
                clearInput();
                ActInSpace.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "skill":
                clearInput();
                skill.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "events":
                clearInput();
                events.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            case "ActInSpace":
                clearInput();
                ActInSpace.forEach(value =>{
                    addTextToResults(value);
                })
                break;
            default:
                clearInput();
                addTextToResults("<p class='toAdd'><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
                break;
        }
        number = 0;
    }

// Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
        textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
        textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
        clearInput();
        if (textInputValue !== ""){ //checking if text was entered
            while(document.getElementsByClassName('toAdd')[0]){
                document.getElementsByClassName('toAdd')[0].remove();
            }
            while(document.getElementsByClassName('userEnteredText')[0]){
                document.getElementsByClassName('userEnteredText')[0].remove();
            }
            addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
            textReplies();

        }
    };


});
