// Game State
        let gameState = {
            level: 1,
            xp: 0,
            xpToNext: 100,
            topicsCompleted: 0,
            masteryPoints: 0,
            title: "Coding Novice",
            completedTopics: new Set(),
            currentTopic: 0, // Index of current unlocked topic
            learningStreak: 0
        };

        // Learning Path Data
        const learningPath = [
            {
                id: "basics",
                number: 1,
                title: "🎯 Basics of Programming",
                description: "Build your foundation with core programming concepts",
                difficulty: 1,
                intro: "Every great programmer starts here! Master variables, loops, functions, and basic problem-solving. This is your launchpad to everything else in computer science.",
                keyPoints: [
                    "Variables and Data Types - storing and manipulating information",
                    "Control Structures - making decisions with if/else, loops",
                    "Functions - breaking problems into smaller pieces", 
                    "Basic Input/Output - interacting with users",
                    "Problem-solving mindset - thinking algorithmically"
                ],
                whyImportant: "Without solid basics, advanced topics become impossible. This foundation supports everything you'll learn next!",
                realWorldUse: "Every single program ever written uses these concepts. From mobile apps to AI systems!",
                resources: {
                    w3schools: "https://www.w3schools.com/python/python_intro.asp",
                    gfg: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
                    practice: "https://www.hackerrank.com/domains/algorithms"
                },
                xpReward: 50
            },
            {
                id: "arrays",
                number: 2,
                title: "🏰 Arrays",
                description: "Master the most fundamental data structure",
                difficulty: 2,
                intro: "Arrays are like numbered boxes in a row. Once you master arrays, you understand how computers store and access data efficiently. This is the gateway to all other data structures!",
                keyPoints: [
                    "Indexing - accessing any element in O(1) time",
                    "Traversal - visiting each element systematically",
                    "Search algorithms - finding elements (linear & binary search)",
                    "Insertion/Deletion - modifying arrays efficiently",
                    "2D Arrays - working with matrices and grids"
                ],
                whyImportant: "Arrays are the building blocks of almost every other data structure. Master this, and everything else becomes easier!",
                realWorldUse: "Image processing, game boards, spreadsheets, databases - arrays are everywhere!",
                resources: {
                    w3schools: "https://www.w3schools.com/python/python_arrays.asp",
                    gfg: "https://www.geeksforgeeks.org/array-data-structure/",
                    practice: "https://leetcode.com/tag/array/"
                },
                xpReward: 75
            },
            {
                id: "strings",
                number: 3,
                title: "📝 Strings",
                description: "Handle text and character manipulation like a pro",
                difficulty: 2,
                intro: "Strings are arrays of characters, but with special powers! From processing user input to parsing data, string manipulation is crucial in every application.",
                keyPoints: [
                    "String operations - concatenation, slicing, comparison",
                    "Pattern matching - finding substrings efficiently",
                    "String algorithms - palindromes, anagrams, pattern searching",
                    "Character encoding - ASCII, Unicode basics",
                    "Regular expressions - powerful text processing"
                ],
                whyImportant: "Every app processes text - user names, messages, data parsing. String skills are essential for real-world programming!",
                realWorldUse: "Search engines, text editors, chatbots, data validation, web scraping!",
                resources: {
                    w3schools: "https://www.w3schools.com/python/python_strings.asp",
                    gfg: "https://www.geeksforgeeks.org/string-data-structure/",
                    practice: "https://leetcode.com/tag/string/"
                },
                xpReward: 75
            },
            {
                id: "linkedlists",
                number: 4,
                title: "🔗 Linked Lists",
                description: "Navigate dynamic data structures with pointers",
                difficulty: 3,
                intro: "Unlike arrays, linked lists grow and shrink dynamically! Each element points to the next, creating flexible chains of data. This introduces you to the power of pointers!",
                keyPoints: [
                    "Node structure - data + pointer to next node",
                    "Traversal - following the chain link by link",
                    "Insertion/Deletion - adding/removing nodes efficiently",
                    "Types - singly, doubly, circular linked lists",
                    "Pointer manipulation - the key to advanced data structures"
                ],
                whyImportant: "Linked lists teach you dynamic memory management and pointer concepts essential for trees, graphs, and system programming!",
                realWorldUse: "Undo functionality, music playlists, browser history, memory management!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_data_linkedlists.php",
                    gfg: "https://www.geeksforgeeks.org/linked-list-data-structure/",
                    practice: "https://leetcode.com/tag/linked-list/"
                },
                xpReward: 100
            },
            {
                id: "stacks-queues",
                number: 5,
                title: "🗼 Stacks & Queues",
                description: "Master LIFO and FIFO data access patterns",
                difficulty: 3,
                intro: "Stacks (Last In, First Out) and Queues (First In, First Out) model how we handle data in specific orders. Think of a stack of plates or a line at a store!",
                keyPoints: [
                    "Stack operations - push, pop, peek (LIFO principle)",
                    "Queue operations - enqueue, dequeue (FIFO principle)", 
                    "Applications - function calls, expression evaluation, BFS",
                    "Implementation - using arrays or linked lists",
                    "Priority queues - advanced queue variations"
                ],
                whyImportant: "These patterns appear everywhere in computer science - from how functions are called to how operating systems schedule tasks!",
                realWorldUse: "Browser back button, undo/redo, printer queues, CPU scheduling, expression parsing!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_data_stacks.php",
                    gfg: "https://www.geeksforgeeks.org/stack-data-structure/",
                    practice: "https://leetcode.com/tag/stack/"
                },
                xpReward: 100
            },
            {
                id: "hashing",
                number: 6,
                title: "🔐 Hashing",
                description: "Achieve lightning-fast data retrieval",
                difficulty: 3,
                intro: "Hashing is like having a magical index that instantly tells you where to find any piece of data! Transform keys into array indices for O(1) average access time.",
                keyPoints: [
                    "Hash functions - converting keys to array indices",
                    "Hash tables/maps - key-value storage with fast access",
                    "Collision handling - dealing with duplicate hash values",
                    "Applications - caching, databases, password storage",
                    "Load factor - balancing speed vs space"
                ],
                whyImportant: "Hashing powers databases, caches, and is fundamental to modern computing performance optimizations!",
                realWorldUse: "Database indexing, password verification, caching systems, blockchain, compiler symbol tables!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_theory_hashtables.php",
                    gfg: "https://www.geeksforgeeks.org/hashing-data-structure/",
                    practice: "https://leetcode.com/tag/hash-table/"
                },
                xpReward: 125
            },
            {
                id: "trees",
                number: 7,
                title: "🌳 Trees",
                description: "Explore hierarchical data structures",
                difficulty: 4,
                intro: "Trees represent hierarchical relationships naturally! From file systems to decision making, trees structure information in intuitive ways. Binary search trees make searching incredibly efficient!",
                keyPoints: [
                    "Tree terminology - root, leaves, height, depth",
                    "Binary trees - each node has at most 2 children",
                    "Tree traversals - inorder, preorder, postorder",
                    "Binary search trees - ordered trees for fast search",
                    "Balanced trees - maintaining optimal performance"
                ],
                whyImportant: "Trees are fundamental to databases, file systems, compilers, and AI decision making. They're everywhere in computer science!",
                realWorldUse: "File systems, HTML DOM, decision trees in AI, database indexing, expression parsing!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_data_trees.php",
                    gfg: "https://www.geeksforgeeks.org/tree-data-structure/",
                    practice: "https://leetcode.com/tag/tree/"
                },
                xpReward: 150
            },
            {
                id: "heaps",
                number: 8,
                title: "⛰️ Heaps & Priority Queues",
                description: "Always access the most important element first",
                difficulty: 4,
                intro: "Heaps are special trees where the most important element (min or max) is always at the top! Perfect for when you need to repeatedly find the 'best' or 'worst' item.",
                keyPoints: [
                    "Heap property - parent always greater/less than children",
                    "Binary heap implementation - using arrays efficiently",
                    "Heap operations - insert, extract-min/max, heapify",
                    "Priority queues - abstract data type using heaps",
                    "Heap sort - sorting using heap properties"
                ],
                whyImportant: "Essential for efficient algorithms like Dijkstra's shortest path, task scheduling, and finding top-K elements!",
                realWorldUse: "Operating system task scheduling, emergency room triage, A* pathfinding, data compression!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_data_heaps.php",
                    gfg: "https://www.geeksforgeeks.org/heap-data-structure/",
                    practice: "https://leetcode.com/tag/heap-priority-queue/"
                },
                xpReward: 150
            },
            {
                id: "greedy",
                number: 9,
                title: "🤑 Greedy Algorithms",
                description: "Make the locally optimal choice at each step",
                difficulty: 4,
                intro: "Sometimes being greedy works perfectly! Greedy algorithms make the best choice at each step, hoping to find the global optimum. Simple strategy, powerful results!",
                keyPoints: [
                    "Greedy choice property - local optimum leads to global optimum",
                    "Activity selection - scheduling non-overlapping activities",
                    "Huffman coding - optimal data compression",
                    "Minimum spanning trees - connecting graphs efficiently",
                    "Interval scheduling - optimizing time-based decisions"
                ],
                whyImportant: "Many real-world optimization problems have elegant greedy solutions that are fast and intuitive!",
                realWorldUse: "Network routing, data compression, scheduling algorithms, financial trading strategies!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_algo_greedy.php",
                    gfg: "https://www.geeksforgeeks.org/greedy-algorithms/",
                    practice: "https://leetcode.com/tag/greedy/"
                },
                xpReward: 175
            },
            {
                id: "backtracking",
                number: 10,
                title: "🔄 Backtracking",
                description: "Explore all possibilities systematically",
                difficulty: 5,
                intro: "When you need to explore all possibilities but want to avoid unnecessary work, backtracking is your friend! Try a path, and if it doesn't work, back up and try another.",
                keyPoints: [
                    "Systematic exploration - trying all possible solutions",
                    "Pruning - avoiding paths that can't lead to solutions",
                    "State space tree - visualizing all possible decisions",
                    "Classic problems - N-Queens, Sudoku, maze solving",
                    "Optimization - finding the best among all valid solutions"
                ],
                whyImportant: "Essential for solving constraint satisfaction problems, game AI, and complex optimization challenges!",
                realWorldUse: "Puzzle solving, game AI (chess, checkers), scheduling with constraints, circuit design!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_algo_backtracking.php",
                    gfg: "https://www.geeksforgeeks.org/backtracking-algorithms/",
                    practice: "https://leetcode.com/tag/backtracking/"
                },
                xpReward: 200
            },
            {
                id: "dp",
                number: 11,
                title: "💎 Dynamic Programming",
                description: "Solve complex problems by breaking them down",
                difficulty: 5,
                intro: "The ultimate problem-solving technique! Break complex problems into simpler subproblems, solve each once, and reuse the results. Transform exponential problems into polynomial ones!",
                keyPoints: [
                    "Optimal substructure - optimal solution contains optimal subsolutions",
                    "Overlapping subproblems - same subproblems appear multiple times",
                    "Memoization - top-down approach with caching",
                    "Tabulation - bottom-up approach building solutions",
                    "Classic problems - Fibonacci, knapsack, longest subsequences"
                ],
                whyImportant: "DP is crucial for optimization problems in AI, economics, bioinformatics, and competitive programming!",
                realWorldUse: "Route optimization, resource allocation, DNA sequence alignment, stock trading, game theory!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_algo_dynamic.php",
                    gfg: "https://www.geeksforgeeks.org/dynamic-programming/",
                    practice: "https://leetcode.com/tag/dynamic-programming/"
                },
                xpReward: 250
            },
            {
                id: "graphs",
                number: 12,
                title: "🕸️ Graphs",
                description: "Master the ultimate data structure for relationships",
                difficulty: 5,
                intro: "Graphs represent relationships between entities - the most flexible and powerful data structure! From social networks to GPS navigation, graphs model the connected world around us.",
                keyPoints: [
                    "Graph representation - adjacency lists and matrices",
                    "Graph traversal - BFS (breadth-first) and DFS (depth-first)",
                    "Shortest paths - Dijkstra's and Floyd-Warshall algorithms",
                    "Minimum spanning trees - connecting all nodes efficiently",
                    "Topological sorting - ordering dependent tasks"
                ],
                whyImportant: "Graphs are the foundation of networks, maps, social media, compilers, and AI - they're everywhere in modern computing!",
                realWorldUse: "Social networks, GPS navigation, internet routing, dependency management, recommendation systems!",
                resources: {
                    w3schools: "https://www.w3schools.com/dsa/dsa_data_graphs.php",
                    gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
                    practice: "https://leetcode.com/tag/graph/"
                },
                xpReward: 300
            }
        ];

        // Initialize game
        function initGame() {
            console.log("Initializing DSA Quest...");
            updatePlayerStats();
            renderLearningPath();
            addAchievement("🎮 Welcome to DSA Quest! Begin your journey with Programming Basics.");
        }

        function updatePlayerStats() {
            try {
                document.getElementById('player-level').textContent = gameState.level;
                document.getElementById('topics-completed').textContent = `${gameState.topicsCompleted} / 12`;
                document.getElementById('mastery-points').textContent = gameState.masteryPoints;
                document.getElementById('player-title').textContent = gameState.title;
                document.getElementById('learning-streak').textContent = `${gameState.learningStreak} days`;
                
                const xpPercent = (gameState.xp / gameState.xpToNext) * 100;
                document.getElementById('xp-bar').style.width = xpPercent + '%';
                document.getElementById('xp-text').textContent = `${gameState.xp} / ${gameState.xpToNext} XP`;
            } catch (error) {
                console.error("Error updating player stats:", error);
            }
        }

        function renderLearningPath() {
            try {
                const worldMap = document.getElementById('world-map');
                worldMap.innerHTML = '';

                learningPath.forEach((topic, index) => {
                    const isUnlocked = index <= gameState.currentTopic;
                    const isCompleted = gameState.completedTopics.has(topic.id);
                    
                    const topicDiv = document.createElement('div');
                    topicDiv.className = `realm ${isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked'}`;
                    
                    topicDiv.innerHTML = `
                        <div class="realm-header">
                            <div class="realm-number">${topic.number}</div>
                            <div class="realm-title">${topic.title}</div>
                            <div class="realm-status">
                                ${isCompleted ? '✅' : isUnlocked ? '🔓' : '🔒'}
                            </div>
                        </div>
                        <div class="realm-description">${topic.description}</div>
                        <div class="difficulty-indicator">
                            ${Array.from({length: 5}, (_, i) => 
                                `<div class="difficulty-dot ${i < topic.difficulty ? 'filled' : ''}"></div>`
                            ).join('')}
                            <span style="margin-left: 10px; font-size: 0.8em;">Difficulty: ${topic.difficulty}/5</span>
                        </div>
                        <div class="realm-intro">${topic.intro}</div>
                        <div class="realm-actions">
                            ${isUnlocked ? `
                                <button class="btn" onclick="openTopicDetail('${topic.id}')">
                                    ${isCompleted ? 'Review Topic' : 'Start Learning'}
                                </button>
                                ${!isCompleted ? `
                                    <button class="btn secondary" onclick="completeTopic('${topic.id}')">
                                        Mark as Completed
                                    </button>
                                ` : ''}
                            ` : ''}
                        </div>
                        ${!isUnlocked ? `
                            <div class="unlock-requirements">
                                🔒 Complete "${index > 0 ? learningPath[index - 1].title : 'previous topic'}" to unlock
                            </div>
                        ` : ''}`;
                    
                    
                    
                    if (isUnlocked && !isCompleted) {
                        topicDiv.addEventListener('click', () => openTopicDetail(topic.id));
                    }
                    
                    worldMap.appendChild(topicDiv);
                });
            } catch (error) {
                console.error("Error rendering learning path:", error);
            }
        }

        function openTopicDetail(topicId) {
            try {
                const topic = learningPath.find(t => t.id === topicId);
                if (!topic) return;

                const modal = document.getElementById('topic-modal');
                const content = document.getElementById('topic-content');
                
                content.innerHTML = `
                    <h2>${topic.title}</h2>
                    <div class="topic-overview">
                        <div class="difficulty-indicator">
                            ${Array.from({length: 5}, (_, i) => 
                                `<div class="difficulty-dot ${i < topic.difficulty ? 'filled' : ''}"></div>`
                            ).join('')}
                            <span style="margin-left: 10px;">Difficulty: ${topic.difficulty}/5</span>
                        </div>
                        <p style="margin: 15px 0; font-size: 1.1em; color: #ccc;">${topic.intro}</p>
                        <div style="margin: 15px 0; padding: 10px; background: rgba(0, 255, 136, 0.1); border-radius: 8px;">
                            <strong style="color: #00ff88;">Why This Matters:</strong> ${topic.whyImportant}
                        </div>
                        <div style="margin: 15px 0; padding: 10px; background: rgba(0, 100, 255, 0.1); border-radius: 8px;">
                            <strong style="color: #00ccff;">Real-World Applications:</strong> ${topic.realWorldUse}
                        </div>
                    </div>
                    
                    <div class="key-concepts">
                        <h3 style="color: #00ccff; margin-bottom: 10px;">🎯 Key Concepts to Master:</h3>
                        <ul style="margin-left: 20px; line-height: 1.6;">
                            ${topic.keyPoints.map(point => `<li style="margin: 8px 0;">${point}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #00ccff; margin-bottom: 15px;">📚 Learning Resources</h3>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <a href="${topic.resources.w3schools}" target="_blank" class="btn">W3Schools Tutorial</a>
                            <a href="${topic.resources.gfg}" target="_blank" class="btn">GeeksforGeeks Guide</a>
                            <a href="${topic.resources.practice}" target="_blank" class="btn secondary">Practice Problems</a>
                        </div>
                    </div>
                    
                    <div style="margin: 20px 0; padding: 15px; background: rgba(255, 170, 0, 0.1); border: 1px solid #ffaa00; border-radius: 8px;">
                        <strong style="color: #ffaa00;">💰 Reward: ${topic.xpReward} XP + Mastery Points</strong>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center;">
                        ${!gameState.completedTopics.has(topicId) ? `
                            <button class="btn" onclick="completeTopic('${topicId}'); closeModal();" style="font-size: 1.1em; padding: 12px 24px;">
                                🎯 Mark as Completed
                            </button>
                        ` : `
                            <div style="color: #00ff88; font-size: 1.2em;">
                                ✅ Topic Mastered! Great work!
                            </div>
                        `}
                    </div>
                `;
                
                modal.style.display = 'block';
            } catch (error) {
                console.error("Error opening topic detail:", error);
            }
        }

        function closeModal() {
            try {
                document.getElementById('topic-modal').style.display = 'none';
            } catch (error) {
                console.error("Error closing modal:", error);
            }
        }

        function completeTopic(topicId) {
            try {
                if (gameState.completedTopics.has(topicId)) {
                    addAchievement(`⚠️ You've already completed ${topicId}!`);
                    return;
                }

                const topic = learningPath.find(t => t.id === topicId);
                if (!topic) return;

                // Add to completed topics
                gameState.completedTopics.add(topicId);
                gameState.topicsCompleted++;
                
                // Award XP and mastery points
                gameState.xp += topic.xpReward;
                gameState.masteryPoints += topic.xpReward / 2;
                
                // Check for level up
                checkLevelUp();
                
                // Unlock next topic
                const currentIndex = learningPath.findIndex(t => t.id === topicId);
                if (currentIndex >= 0 && currentIndex + 1 < learningPath.length) {
                    gameState.currentTopic = Math.max(gameState.currentTopic, currentIndex + 1);
                    const nextTopic = learningPath[currentIndex + 1];
                    addAchievement(`🔓 Unlocked: ${nextTopic.title}!`);
                }
                
                // Update title based on progress
                updatePlayerTitle();
                
                // Add completion achievement
                addAchievement(`🎉 Completed: ${topic.title}! Earned ${topic.xpReward} XP!`);
                
                // Update display
                updatePlayerStats();
                renderLearningPath();
                
                // Special achievements
                checkSpecialAchievements();
                
            } catch (error) {
                console.error("Error completing topic:", error);
            }
        }

        function checkLevelUp() {
            try {
                while (gameState.xp >= gameState.xpToNext) {
                    gameState.xp -= gameState.xpToNext;
                    gameState.level++;
                    gameState.xpToNext = Math.floor(gameState.xpToNext * 1.5);
                    addAchievement(`🆙 Level Up! You are now level ${gameState.level}!`);
                }
            } catch (error) {
                console.error("Error checking level up:", error);
            }
        }

        function updatePlayerTitle() {
            try {
                const titles = [
                    { min: 0, title: "Coding Novice" },
                    { min: 2, title: "Algorithm Apprentice" },
                    { min: 4, title: "Data Structure Explorer" },
                    { min: 6, title: "Code Warrior" },
                    { min: 8, title: "Algorithm Master" },
                    { min: 10, title: "DSA Champion" },
                    { min: 12, title: "Grand Master of Algorithms" }
                ];
                
                for (let i = titles.length - 1; i >= 0; i--) {
                    if (gameState.topicsCompleted >= titles[i].min) {
                        if (gameState.title !== titles[i].title) {
                            gameState.title = titles[i].title;
                            addAchievement(`👑 New Title Earned: ${gameState.title}!`);
                        }
                        break;
                    }
                }
            } catch (error) {
                console.error("Error updating player title:", error);
            }
        }

        function checkSpecialAchievements() {
            try {
                if (gameState.topicsCompleted === 3) {
                    addAchievement("🚀 Foundation Builder! Completed your first 3 topics!");
                }
                if (gameState.topicsCompleted === 6) {
                    addAchievement("⚡ Speed Learner! Halfway through the journey!");
                }
                if (gameState.topicsCompleted === 9) {
                    addAchievement("🔥 Almost There! Only 3 topics left!");
                }
                if (gameState.topicsCompleted === 12) {
                    addAchievement("🏆 LEGENDARY! You've mastered all DSA topics! You're ready for anything! 🎊");
                }
                if (gameState.level === 5) {
                    addAchievement("⭐ Veteran Coder! Reached level 5!");
                }
                if (gameState.masteryPoints >= 500) {
                    addAchievement("💎 Mastery Expert! Earned 500+ mastery points!");
                }
            } catch (error) {
                console.error("Error checking special achievements:", error);
            }
        }

        function addAchievement(message) {
            try {
                const achievementsList = document.getElementById('achievements-list');
                const achievement = document.createElement('div');
                achievement.className = 'achievement';
                achievement.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span>${message}</span>
                        <span style="font-size: 0.8em; opacity: 0.7;">${new Date().toLocaleTimeString()}</span>
                    </div>
                `;
                
                achievementsList.insertBefore(achievement, achievementsList.firstChild);
                
                // Keep only last 5 achievements visible
                const achievements = achievementsList.children;
                while (achievements.length > 5) {
                    achievementsList.removeChild(achievements[achievements.length - 1]);
                }
                
                // Auto-remove after 10 seconds
                setTimeout(() => {
                    if (achievement.parentNode) {
                        achievement.style.opacity = '0';
                        setTimeout(() => {
                            if (achievement.parentNode) {
                                achievement.parentNode.removeChild(achievement);
                            }
                        }, 500);
                    }
                }, 10000);
                
            } catch (error) {
                console.error("Error adding achievement:", error);
            }
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('topic-modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Initialize the game when page loads
        document.addEventListener('DOMContentLoaded', function() {
            console.log("DOM loaded, initializing game...");
            initGame();
        });

        // Auto-save game state every 30 seconds (if localStorage is available)
        setInterval(() => {
            try {
                if (typeof(Storage) !== "undefined") {
                    // Convert Set to Array for JSON serialization
                    const stateToSave = {
                        ...gameState,
                        completedTopics: Array.from(gameState.completedTopics)
                    };
                    localStorage.setItem('dsaQuestState', JSON.stringify(stateToSave));
                }
            } catch (error) {
                console.log("Auto-save failed:", error);
            }
        }, 30000);

        // Load saved game state on startup
        function loadGameState() {
            try {
                if (typeof(Storage) !== "undefined") {
                    const saved = localStorage.getItem('dsaQuestState');
                    if (saved) {
                        const savedState = JSON.parse(saved);
                        gameState = { ...gameState, ...savedState };
                        
                        // Handle completedTopics Set conversion properly
                        if (savedState.completedTopics) {
                            if (Array.isArray(savedState.completedTopics)) {
                                gameState.completedTopics = new Set(savedState.completedTopics);
                            } else if (savedState.completedTopics instanceof Set) {
                                gameState.completedTopics = savedState.completedTopics;
                            } else {
                                gameState.completedTopics = new Set();
                            }
                        } else {
                            gameState.completedTopics = new Set();
                        }
                        
                        console.log("Game state loaded successfully!");
                    }
                }
            } catch (error) {
                console.log("Failed to load game state:", error);
                // Reset to default state if loading fails
                gameState.completedTopics = new Set();
            }
        }

        // Load state before initializing
        loadGameState();

 