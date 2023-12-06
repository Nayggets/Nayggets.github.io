

var aboutme = [
    '<span>Quentin Mélotte. As a computer science student, I\'m deeply passionate about embedded systems and extensively involved in network development. I\'ve established a foundational understanding of cybersecurity through platforms like Hack The Box or Root Me. Additionally, I have a grounding in video game development from participating in multiple game jams. </span>',
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
        '<a target="_blank" href="https://uther.itch.io/expanshroom">Expanshroom</a>',
        '<span> this game was done during the GlobalGameJam</span>',
        '<a target="_blank" href="https://github.com/Nayggets/Chip8_Emulator"> Chip8Emulator </a>',
        '<span>I wanted to do an emulator of an old computer so i made this Chip8Emulator in C</span>',
        '<a target="_blank" href="https://github.com/Nayggets/Shell">Shell </a>',
        '<span>I made a simple shell to understand duplication of process and a lot of other complexe</span>',
        '<a target="_blank" href="https://github.com/Nayggets/VMTranslator">VMTranslator</a>',
        '<span>This is a VMTranslator for the language jack in the nand2tetris cours this compiler the byte code after the first step of compilation',
        '<a target="_blank" href="https://github.com/Nayggets/Double-Snake">Double Snake</a>',
        '<span> This game is inspired by the snake game but it\'s a 1V1 snake</span>',
        '<br>',
        '<span> And i have a lot of other project that i don\'t want reveal</span>',
        '<br>',
        '<span class="command"> You can type the name of the projects to see more details about-it </span>',
    ]

var email=   '<a target="_blank" href="mailto:quentin.melotte@etu.umontpellier.fr">quentin.melotte@etu.umontpellier.fr</a>';


var terminal =
    [ '<h1 class="toAdd">Shell</h1>',
        '<span class="command">    Introduction:</span>',
        '<span>    Undertaking a profound exploration into the mechanics of low-level programming, I embarked on a project that involved coding a shell in the C language. This project served as a pivotal journey, delving deep into the fundamental operations of operating systems.</span>',
        '<br>',
        '<span class="command">    Description of the Project and Shell\'s Functionality:</span>',
        '<span>    The shell project was a comprehensive endeavor aiming to emulate a basic command-line interface. Its core functionalities encompassed the implementation of fork exec mechanics, the handling of piping for inter-process communication, navigation commands such as \'cd\' for file system traversal, and the ability to parse and execute Bash commands.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    The motivation behind this project stemmed from a strong desire to grasp the intricate workings of operating systems at a granular level. By coding this shell, I aimed not only to comprehend the underlying mechanisms of process creation, execution, and communication but also to sharpen my skills in writing clean, efficient code. Moreover, the project offered a valuable opportunity to document and articulate code functionality in a clear and comprehensive manner.</span>',
        '<br>',
        '<span class="command">    Conclusion:</span>',
        '<span>    In conclusion, this endeavor was more than just crafting a functional shell; it was an immersive learning experience. It provided insights into the nuances of low-level programming, reinforcing the significance of precision, structure, and clarity in coding practices. This project not only enhanced my technical abilities but also underscored the importance of hands-on projects in solidifying understanding and skill development in the realm of software development.</span>'

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
        '<span>     The development of my Chip-8 emulator in C++ has been an incredibly enriching experience. It has allowed me to explore the depths of C++ programming, deepen my understanding of emulation, and present an intellectually stimulating challenge. This project stands as a significant milestone in my quest to expand my knowledge and proficiency in C++ programming.</span>'

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
        '<span class="command">    Introduction:</span>',
        '<span>    My endeavor into developing a C compiler coded in C itself has been an illuminating journey thus far. This project began with laying the groundwork for a C compiler by building the lexer and parser for the C language. These components served as a foundational step towards understanding tokenization, lexical analysis, parsing, and comprehending the core elements of the C language and its associated toolset.  </span>',
        '<br>',
        '<span class="command">    Description of the Project and Shell\'s Functionality:</span>',
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
    [   '<h1 class="toAdd">Peer To Peer Chat\n</h1>',
        '<span class="command">    Introduction:</span>',
        '<span>    Undertaking a profound exploration into the mechanics of low-level programming, I embarked on a project that involved coding a shell in the C language. This project served as a pivotal journey, delving deep into the fundamental operations of operating systems.</span>',
        '<br>',
        '<span class="command">    Description of the Project and Shell\'s Functionality:</span>',
        '<span>    The shell project was a comprehensive endeavor aiming to emulate a basic command-line interface. Its core functionalities encompassed the implementation of fork exec mechanics, the handling of piping for inter-process communication, navigation commands such as \'cd\' for file system traversal, and the ability to parse and execute Bash commands.</span>',
        '<br>',
        '<span class="command">Reason for Project Pursuit:</span>',
        '<span>    The motivation behind this project stemmed from a strong desire to grasp the intricate workings of operating systems at a granular level. By coding this shell, I aimed not only to comprehend the underlying mechanisms of process creation, execution, and communication but also to sharpen my skills in writing clean, efficient code. Moreover, the project offered a valuable opportunity to document and articulate code functionality in a clear and comprehensive manner.</span>',
        '<br>',
        '<span class="command">    Conclusion:</span>',
        '<span>    In conclusion, this endeavor was more than just crafting a functional shell; it was an immersive learning experience. It provided insights into the nuances of low-level programming, reinforcing the significance of precision, structure, and clarity in coding practices. This project not only enhanced my technical abilities but also underscored the importance of hands-on projects in solidifying understanding and skill development in the realm of software development.</span>'


    ]

var future =
    [
        '<span class="command">And in the future ?</span>',
        '<span id="Topic">Future Study : ',
        '<span>I would like to enter in an Engineering school To pursue a curriculum in embedded systems </span>',
        '<span>To learn more about Boolean logic , Combinatory logic , Sequential Logic and modern computer architecture</span>',
        '<span>Be able to build my own product From hardware to software through the system. </span>',
        '<span>And Become Expert in embedded systems.</span>',

    ]

var social =
    [
        '<a target="_blank" href="https://github.com/Nayggets">My Github</a>',
        '<a target="_blank" href="https://www.linkedin.com/in/quentin-m%C3%A9lotte-nayggets/">My Linkedin</a>',
        '<a target="_blank" href="https://www.root-me.org/Nayggets">My Rootme</a>',
]

var FAQ =
    [
        '<span id="Question">Why isn\'t there any photo of me on my portfolio?</span>',
        '<span>Simply because I believe that if your judgment of me is based on my appearance rather than my skills, then you don\'t deserve to work with me.</span>',
        '<br>',
        '<span id="Question">Why did you create a portfolio in the form of a shell instead of a beautiful design with animations and the latest web frameworks?</span>',
        '<span>I believe that creating a portfolio in the form of a shell represents me much more than creating a sophisticated design. I ABSOLUTELY DO NOT want to work in web development and as a big fan and enthusiast of from scratch programming, I find the shell more representative of myself.</span>',
        '<br>',
        '<span id="Question">What do you want to work in?</span>',
        '<span>I would like to work in embedded systems related to space or in low-level development on the operating system side.</span>',
        '<br>',
        '<span id="Question">What are you doing at this moment?</span>',
        '<span>Right now i\'m certainly programming an Operating System or making a robot with arduino stuff</span>',
        '<br>',
        '<span id="Question">How did i started Computer Science?</span>',
        '<a target="_blank" href="https://www.linkedin.com/posts/quentin-m%C3%A9lotte-nayggets_caroussel-how-did-i-start-computer-science-activity-7046413602416656384-_cbo?utm_source=share&utm_medium=member_desktop">Caroussel explanation</a>'


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
        "<span id='Question'>3 Notion that i learned in:</span>",
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

var personnality =
    [
        '<span class="command">My main personality traits</span>',
        '<span>Ambitious</span>',
        '<span>Autonomous</span>',
        '<span>Constructive, seeking to make progress</span>',
        '<span>Curiosity</span>',
        '<span>Self-confidence</span>',
        '<span>Conscientious</span>',
        '<span>Creativity</span>',
        '<span>Entrepreneurial spirit</span>',
        '<span>Self-Mastery</span>',
        '<span>Perfectionism</span>',
        '<span>Willpower</span>'

    ]
var info = [

    '<span class="command">Navigate through my portfolio is very simple, just enter the corresponding command from the list below:</span>',
    '<br>',
    '<span class="command">About-me</span> Who am I ?',
    '<br>',
    '<span class="command">Projects</span> Want to see some of my realisations ?',
    '<br>',
    '<span class="command">Formations</span> What is my educational background ?',
    '<br>',
    '<span class="command">Social</span> Take a look of my social media',
    '<br>',
    '<span class="command">Contact</span> Want to contact me ?',
    '<br>',
    '<span class="command">FAQ</span> Answering a lot of question you will ask about me',
    '<br>',
    '<span class="command">Certifications</span> The formation that i got.',
    '<br>',
    '<span class="command">My-motivation</span> What are my motivations and value to do what i do',
    '<br>',
    '<span class="command">The-future</span> Future Plans',
    '<br>',
    '<span class="command">Personality</span> My personality and character traits.'
]

var certifications =
    [
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-ecc3a156-97fe-4471-a384-e1fcbf557f7d/">Complete x86 Assembly Programming | 120+ Pratical Exercises</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-c2f42c2a-bc63-426f-b54c-bc1b611409e4/">x86 Assembly Language Programming From Ground Up</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-ca08d4d2-fa68-4499-ae30-bb26d4d970dc/">Operating Systems Final Part(4) : File Systems & Threads</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-80a24a26-c191-4d01-9dd5-3093ef515ded/">Operating Systems Part3 : Syncronization and Deadlock</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-f7280ecc-2f58-416d-9bf7-c05e2b553c09/">Operating Systems from Scratch - Part 2</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-43da2f22-339e-4989-8036-be64ef0703d9/">Operating Systems from Scratch - Part 1</a>',
        '<a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/L9AC5PC3KKEU">Build a Modern Computer from First Principles: Nand to Tetris Part II(Project-Centered Course)</a>',
        '<a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/M47E5GEHKMHW">Build a Modern Computer from First Principles: Nand to Tetris (Project-Centered Course)</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-2c482f21-92aa-4aa0-a91f-1ec06a7d1aed/">Creating a Chip-8 Emulator in C</a>',
        '<a target="_blank" href="https://www.udemy.com/certificate/UC-dac218f4-f83b-4a09-8330-07a68caee180/">Creating a C Compiler From Scratch Module 1</a>',


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
        scrollToBottomOfResults();
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
        scrollToBottomOfResults();

    }

    // Scrtoll to the bottom of the results div
    var scrollToBottomOfResults = function(){

        window.scrollTo(0, document.body.scrollHeight);
        window.resizeBy(window.innerWidth,window.innerHeight);
    }

    // Scroll to the bottom of the results
    scrollToBottomOfResults();


    // Add text to the results div
    var addTextToResults = function(textToAdd){
        document.getElementById('terminalResultsCont').innerHTML += "<p class='toAdd'>" + textToAdd + "</p>";
        scrollToBottomOfResults();
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
        scrollToBottomOfResults();
    }
*/



    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function(){
        // Array of all the help keywords
        info.forEach(value => {
            console.log(value);
            addTextToResults(value);
            number++;
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
            case "about-me":
                about_me();
                break;
            case "faq":
                clearInput();
                FAQ.forEach(value => {
                    addTextToResults(value);
                    number++;
                });
                break;
            case "contact":
                clearInput();
                addTextToResults(email);
                break;
            case "social":
                clearInput();
                social.forEach(value => {
                    addTextToResults(value);
                    number++;

                })
                break;
            case "the-future":
                clearInput();
                future.forEach(value => {
                    addTextToResults(value);
                    number++;
                })
                break;
            case "formations":
            {
                clearInput();
                formations.forEach(value => {
                    addTextToResults(value);
                    number++;
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
                    number++;
                })
                break;
            case "personality":

                clearInput();
                personnality.forEach(value => {
                    addTextToResults(value);
                    number++;
                })
                break;
            case "my-motivation":
                clearInput();
                valueAndMotivations.forEach(value => {
                    addTextToResults(value);
                    number++;
                })
                break;

            case "projects":
                clearInput();
                projets.forEach(value =>{
                    addTextToResults(value);
                    number++;
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
            default:
                clearInput();
                addTextToResults("<p class='toAdd'><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
                break;
        }
        number = 0;
        scrollToBottomOfResults();
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
            scrollToBottomOfResults();

        }
    };


});