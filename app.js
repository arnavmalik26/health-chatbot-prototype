// Health data and responses
const healthData = {
    "healthQueries": [
        {
            "keywords": ["fever", "temperature", "bukhar", "jwar"],
            "response": {
                "english": "Fever can be a sign of infection. For fever above 101°F (38.3°C): Take paracetamol, drink plenty of fluids, get rest. Consult a doctor if fever persists for more than 3 days or reaches 103°F (39.4°C).",
                "hindi": "बुखार संक्रमण का संकेत हो सकता है। 101°F (38.3°C) से अधिक बुखार के लिए: पैरासिटामोल लें, खूब तरल पदार्थ पिएं, आराम करें। यदि बुखार 3 दिन से अधिक रहे या 103°F (39.4°C) तक पहुंचे तो डॉक्टर से सलाह लें।",
                "odia": "ଜ୍ୱର ସଂକ୍ରମଣର ଲକ୍ଷଣ ହୋଇପାରେ। 101°F (38.3°C) ରୁ ଅଧିକ ଜ୍ୱର ପାଇଁ: ପାରାସିଟାମଲ ନିଅନ୍ତୁ, ଅଧିକ ତରଳ ପଦାର୍ଥ ପିଅନ୍ତୁ, ବିଶ୍ରାମ ନିଅନ୍ତୁ।"
            },
            "category": "symptoms"
        },
        {
            "keywords": ["dengue", "mosquito", "rash"],
            "response": {
                "english": "Dengue symptoms include high fever, severe headache, pain behind eyes, muscle/joint pain, and rash. Prevention: Use mosquito nets, eliminate standing water, wear full-sleeve clothes. Seek immediate medical attention for severe symptoms.",
                "hindi": "डेंगू के लक्षणों में तेज बुखार, गंभीर सिरदर्द, आंखों के पीछे दर्द, मांसपेशियों/जोड़ों में दर्द और रैश शामिल हैं। रोकथाम: मच्छरदानी का उपयोग करें, खड़े पानी को खत्म करें, पूरी आस्तीन के कपड़े पहनें।",
                "odia": "ଡେଙ୍ଗୁର ଲକ୍ଷଣରେ ଉଚ୍ଚ ଜ୍ୱର, ଗୁରୁତର ମୁଣ୍ଡବ୍ୟଥା, ଆଖି ପଛରେ ଯନ୍ତ୍ରଣା, ମାଂସପେଶୀ/ଗଣ୍ଠି ଯନ୍ତ୍ରଣା ଏବଂ ରାଶ ଅନ୍ତର୍ଭୁକ୍ତ।"
            },
            "category": "prevention"
        },
        {
            "keywords": ["vaccination", "immunization", "vaccine", "tikakaran"],
            "response": {
                "english": "Vaccination Schedule by Age:<br>• Birth: BCG, Hepatitis B, OPV-0<br>• 6 weeks: DPT-1, IPV-1, Hib-1, Rotavirus-1, PCV-1, OPV-1<br>• 10 weeks: DPT-2, IPV-2, Hib-2, Rotavirus-2, PCV-2, OPV-2<br>• 14 weeks: DPT-3, IPV-3, Hib-3, Rotavirus-3, PCV-3, OPV-3<br>• 9-12 months: Measles, JE-1, Vitamin A",
                "hindi": "उम्र के अनुसार टीकाकरण कार्यक्रम:<br>• जन्म: BCG, हेपेटाइटिस B, OPV-0<br>• 6 सप्ताह: DPT-1, IPV-1, Hib-1, रोटावायरस-1, PCV-1, OPV-1<br>• 10 सप्ताह: DPT-2, IPV-2, Hib-2, रोटावायरस-2, PCV-2, OPV-2",
                "odia": "ବୟସ ଅନୁସାରେ ଟିକାକରଣ ସୂଚୀ:<br>• ଜନ୍ମ: BCG, ହେପାଟାଇଟିସ୍ B, OPV-0<br>• 6 ସପ୍ତାହ: DPT-1, IPV-1, Hib-1, ରୋଟାଭାଇରସ୍-1"
            },
            "category": "vaccination"
        },
        {
            "keywords": ["pregnancy", "pregnant", "garbhavastha"],
            "response": {
                "english": "Pregnancy Care Tips:<br>• Regular check-ups every month<br>• Take iron and folic acid tablets daily<br>• Eat nutritious food including green vegetables, fruits, milk<br>• Get TT vaccination<br>• Avoid smoking, alcohol, and heavy lifting<br>• Register at nearest Anganwadi center",
                "hindi": "गर्भावस्था देखभाल सुझाव:<br>• हर माह नियमित जांच<br>• रोजाना आयरन और फोलिक एसिड की गोलियां लें<br>• हरी सब्जियां, फल, दूध सहित पौष्टिक भोजन करें<br>• TT टीकाकरण कराएं",
                "odia": "ଗର୍ଭାବସ୍ଥା ଯତ୍ନ ପରାମର୍ଶ:<br>• ପ୍ରତିମାସରେ ନିୟମିତ ଯାଞ୍ଚ<br>• ପ୍ରତିଦିନ ଆଇରନ୍ ଏବଂ ଫୋଲିକ୍ ଏସିଡ୍ ଟାବଲେଟ୍ ନିଅନ୍ତୁ"
            },
            "category": "maternal_health"
        },
        {
            "keywords": ["diarrhea", "loose motion", "dast", "pet kharab"],
            "response": {
                "english": "Diarrhea Treatment:<br>• Drink ORS (Oral Rehydration Solution) frequently<br>• Eat light foods like rice, banana, toast<br>• Avoid dairy, spicy, and fried foods<br>• Wash hands frequently<br>• Consult doctor if symptoms persist for more than 2 days or if there's blood in stool",
                "hindi": "दस्त का इलाज:<br>• बार-बार ORS (ओरल रिहाइड्रेशन सोल्यूशन) पिएं<br>• चावल, केला, टोस्ट जैसे हल्के खाद्य पदार्थ खाएं<br>• डेयरी, मसालेदार और तली हुई चीजों से बचें",
                "odia": "ଡାଇରିଆ ଚିକିତ୍ସା:<br>• ବାରମ୍ବାର ORS (ଓରାଲ୍ ରିହାଇଡ୍ରେସନ୍ ସୋଲ୍ୟୁସନ୍) ପିଅନ୍ତୁ<br>• ଚାଉଳ, କଦଳୀ, ଟୋଷ୍ଟ ଭଳି ହାଲୁକା ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
            },
            "category": "treatment"
        }
    ],
    "emergencyContacts": {
        "english": "Emergency Contacts:<br>• Ambulance: 108<br>• Medical Emergency: 102<br>• Disaster Management: 1070<br>• Odisha Health Helpline: 104<br>• Women Helpline: 181<br>• Child Helpline: 1098",
        "hindi": "आपातकालीन संपर्क:<br>• एम्बुलेंस: 108<br>• मेडिकल इमरजेंसी: 102<br>• आपदा प्रबंधन: 1070<br>• ओडिशा स्वास्थ्य हेल्पलाइन: 104",
        "odia": "ଜରୁରୀକାଳୀନ ଯୋଗାଯୋଗ:<br>• ଆମ୍ବୁଲାନ୍ସ: 108<br>• ମେଡିକାଲ୍ ଇମରଜେନ୍ସି: 102<br>• ବିପର୍ଯ୍ୟୟ ପରିଚାଳନା: 1070"
    }
};

// Welcome messages for different languages
const welcomeMessages = {
    english: "Welcome to Odisha Health Assistant! How can I help you today?",
    hindi: "ओडिशा स्वास्थ्य सहायक में आपका स्वागत है! आज मैं आपकी कैसे मदद कर सकता हूं?",
    odia: "ଓଡିଶା ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକକୁ ସ୍ୱାଗତ! ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରେ?"
};

// Global state
let currentLanguage = 'english';
let analytics = {
    totalQueries: 0,
    todayQueries: 0,
    sessionQueries: 0,
    languageUsage: {
        english: 1,
        hindi: 0,
        odia: 0
    },
    topicUsage: {
        symptoms: 0,
        prevention: 0,
        vaccination: 0,
        maternal_health: 0,
        treatment: 0,
        emergency: 0
    },
    activityLog: []
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing app...');
    initializeApp();
    setupEventListeners();
    loadAnalyticsFromStorage();
    updateAnalyticsDisplay();
    logActivity('Session started');
});

function initializeApp() {
    updateWelcomeMessage();
    updateLanguageInAnalytics();
    
    // Add some initial demo analytics for better UX
    if (analytics.totalQueries === 0) {
        analytics.totalQueries = Math.floor(Math.random() * 50) + 15;
        analytics.todayQueries = Math.floor(Math.random() * 10) + 3;
    }
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Tab switching with proper event delegation
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Tab clicked:', this.dataset.tab);
            switchTab(this.dataset.tab);
        });
    });

    // Language selection
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            console.log('Language changed to:', this.value);
            changeLanguage(this.value);
        });
    }

    // Message input and send button
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    // Quick reply buttons
    const quickReplyButtons = document.querySelectorAll('.quick-reply-btn');
    quickReplyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = this.dataset.query;
            console.log('Quick reply clicked:', query);
            sendQuickReply(query);
        });
    });
}

function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (content.id === `${tabName}-tab`) {
            content.classList.add('active');
            content.style.display = 'flex';
        } else {
            content.classList.remove('active');
            content.style.display = 'none';
        }
    });

    logActivity(`Switched to ${tabName} tab`);
}

function changeLanguage(newLanguage) {
    console.log('Changing language from', currentLanguage, 'to', newLanguage);
    currentLanguage = newLanguage;
    updateWelcomeMessage();
    updateLanguageInAnalytics();
    
    // Update analytics
    analytics.languageUsage[newLanguage]++;
    updateAnalyticsDisplay();
    saveAnalyticsToStorage();
    
    logActivity(`Language changed to ${newLanguage}`);
}

function updateWelcomeMessage() {
    const welcomeElement = document.getElementById('welcomeMessage');
    if (welcomeElement) {
        welcomeElement.textContent = welcomeMessages[currentLanguage];
    }
}

function updateLanguageInAnalytics() {
    const languageNames = {
        english: 'English',
        hindi: 'Hindi', 
        odia: 'Odia'
    };
    const currentLangElement = document.getElementById('currentLanguage');
    if (currentLangElement) {
        currentLangElement.textContent = languageNames[currentLanguage];
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (!message) {
        console.log('Empty message, not sending');
        return;
    }

    console.log('Sending message:', message);
    
    // Add user message to chat immediately
    addMessageToChat(message, 'user');
    
    // Clear input
    messageInput.value = '';
    
    // Update analytics
    analytics.totalQueries++;
    analytics.todayQueries++;
    analytics.sessionQueries++;
    
    // Process and respond with a slight delay for better UX
    setTimeout(() => {
        const response = processMessage(message);
        addMessageToChat(response, 'bot');
        updateAnalyticsDisplay();
        saveAnalyticsToStorage();
    }, 800);
    
    logActivity(`User query: "${message.substring(0, 30)}${message.length > 30 ? '...' : ''}"`);
}

function sendQuickReply(queryType) {
    console.log('Processing quick reply:', queryType);
    
    const queryMap = {
        'fever': 'fever symptoms',
        'vaccination': 'vaccination schedule',
        'pregnancy': 'pregnancy care',
        'emergency': 'emergency contacts',
        'dengue': 'dengue prevention',
        'diarrhea': 'diarrhea treatment'
    };
    
    const message = queryMap[queryType] || queryType;
    
    // Add user message
    addMessageToChat(message, 'user');
    
    // Update analytics
    analytics.totalQueries++;
    analytics.todayQueries++;
    analytics.sessionQueries++;
    
    // Track topic usage
    if (queryType === 'emergency') {
        analytics.topicUsage.emergency++;
    } else {
        const matchingQuery = healthData.healthQueries.find(q => 
            q.keywords.some(keyword => message.toLowerCase().includes(keyword))
        );
        if (matchingQuery) {
            const category = matchingQuery.category;
            if (analytics.topicUsage[category] !== undefined) {
                analytics.topicUsage[category]++;
            }
        }
    }
    
    // Process and respond
    setTimeout(() => {
        const response = processMessage(message);
        addMessageToChat(response, 'bot');
        updateAnalyticsDisplay();
        saveAnalyticsToStorage();
    }, 600);
    
    logActivity(`Quick reply: ${message}`);
}

function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    console.log('Processing message:', lowerMessage);
    
    // Check for emergency contacts first
    if (lowerMessage.includes('emergency') || lowerMessage.includes('contact') || lowerMessage.includes('helpline')) {
        analytics.topicUsage.emergency++;
        return healthData.emergencyContacts[currentLanguage];
    }
    
    // Check health queries
    for (const query of healthData.healthQueries) {
        for (const keyword of query.keywords) {
            if (lowerMessage.includes(keyword.toLowerCase())) {
                const category = query.category;
                if (analytics.topicUsage[category] !== undefined) {
                    analytics.topicUsage[category]++;
                }
                return query.response[currentLanguage];
            }
        }
    }
    
    // Default response
    const defaultResponses = {
        english: "I understand you're looking for health information. Please try asking about fever, vaccination, pregnancy care, dengue prevention, diarrhea treatment, or emergency contacts. You can also use the quick reply buttons below.",
        hindi: "मैं समझता हूं कि आप स्वास्थ्य की जानकारी खोज रहे हैं। कृपया बुखार, टीकाकरण, गर्भावस्था देखभाल, डेंगू रोकथाम, दस्त का इलाज, या आपातकालीन संपर्क के बारे में पूछने का प्रयास करें।",
        odia: "ମୁଁ ବୁଝିପାରୁଛି ଯେ ଆପଣ ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ଖୋଜୁଛନ୍ତି। ଦୟାକରି ଜ୍ୱର, ଟିକାକରଣ, ଗର୍ଭାବସ୍ଥା ଯତ୍ନ, ଡେଙ୍ଗୁ ପ୍ରତିରୋଧ, ଡାଇରିଆ ଚିକିତ୍ସା, କିମ୍ବା ଜରୁରୀକାଳୀନ ଯୋଗାଯୋଗ ବିଷୟରେ ପଚାରିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।"
    };
    
    return defaultResponses[currentLanguage];
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) {
        console.error('Chat messages container not found');
        return;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = message;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    console.log('Added message:', message.substring(0, 50));
}

function updateAnalyticsDisplay() {
    console.log('Updating analytics display');
    
    // Update main stats with error handling
    const elements = [
        { id: 'totalQueries', value: analytics.totalQueries },
        { id: 'todayQueries', value: analytics.todayQueries },
        { id: 'sessionQueries', value: analytics.sessionQueries },
        { id: 'englishCount', value: analytics.languageUsage.english },
        { id: 'hindiCount', value: analytics.languageUsage.hindi },
        { id: 'odiaCount', value: analytics.languageUsage.odia },
        { id: 'symptomsCount', value: analytics.topicUsage.symptoms },
        { id: 'preventionCount', value: analytics.topicUsage.prevention },
        { id: 'vaccinationCount', value: analytics.topicUsage.vaccination },
        { id: 'emergencyCount', value: analytics.topicUsage.emergency }
    ];
    
    elements.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            element.textContent = item.value;
            // Add animation class
            element.classList.add('updated');
            setTimeout(() => element.classList.remove('updated'), 600);
        }
    });
}

function logActivity(activity) {
    const timestamp = new Date().toLocaleTimeString();
    const activityText = `${timestamp} - ${activity}`;
    
    analytics.activityLog.unshift(activityText);
    
    // Keep only last 15 activities
    if (analytics.activityLog.length > 15) {
        analytics.activityLog = analytics.activityLog.slice(0, 15);
    }
    
    // Update activity log display
    const activityLog = document.getElementById('activityLog');
    if (activityLog) {
        activityLog.innerHTML = '';
        
        analytics.activityLog.forEach((activity, index) => {
            const activityDiv = document.createElement('p');
            activityDiv.className = `activity-item ${index === 0 ? 'new' : ''}`;
            activityDiv.textContent = activity;
            activityLog.appendChild(activityDiv);
        });
    }
    
    saveAnalyticsToStorage();
}

function saveAnalyticsToStorage() {
    try {
        const dataToSave = {
            ...analytics,
            lastUpdate: Date.now()
        };
        // Just store in memory for this session since localStorage isn't available
        window.healthChatAnalytics = dataToSave;
    } catch (error) {
        console.log('Storage not available, keeping data in memory');
    }
}

function loadAnalyticsFromStorage() {
    try {
        // Try to load from window object if available
        if (window.healthChatAnalytics) {
            const data = window.healthChatAnalytics;
            analytics = { ...analytics, ...data };
            analytics.sessionQueries = 0; // Reset session queries
        }
    } catch (error) {
        console.log('Could not load analytics from storage');
    }
}