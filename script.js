// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated AR Demo - All 9 Indian Languages
const languages = {
    'hi': { name: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
    'en': { name: 'English', native: 'English', flag: '🇬🇧' },
    'ta': { name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
    'te': { name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
    'kn': { name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
    'ml': { name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
    'mr': { name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
    'bn': { name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
    'gu': { name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' }
};

// Translation examples for all languages
const translations = {
    'hi': {
        text: 'नमस्ते, मैं हिंदी में बोल रहा हूँ। यह एक अद्भुत तकनीक है।',
        to: {
            'en': 'Hello, I am speaking in Hindi. This is amazing technology.',
            'ta': 'வணக்கம், நான் இந்தியில் பேசுகிறேன். இது ஒரு அற்புதமான தொழில்நுட்பம்.',
            'te': 'నమస్కారం, నేను హిందీలో మాట్లాడుతున్నాను. ఇది అద్భుతమైన సాంకేతికత.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ಹಿಂದಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ಅದ್ಭುತ ತಂತ್ರಜ್ಞಾನ.',
            'ml': 'നമസ്കാരം, ഞാൻ ഹിന്ദിയിൽ സംസാരിക്കുന്നു. ഇത് അതിശയകരമായ സാങ്കേതികവിദ്യയാണ്.',
            'mr': 'नमस्कार, मी हिंदीत बोलत आहे. ही एक अद्भुत तंत्रज्ञान आहे.',
            'bn': 'নমস্কার, আমি হিন্দিতে কথা বলছি। এটি একটি আশ্চর্যজনক প্রযুক্তি।',
            'gu': 'નમસ્તે, હું હિંદીમાં બોલી રહ્યો છું. આ એક અદ્ભુત ટેકનોલોજી છે.'
        }
    },
    'en': {
        text: 'Hello, I am speaking in English. This technology is incredible.',
        to: {
            'hi': 'नमस्ते, मैं अंग्रेजी में बोल रहा हूँ। यह तकनीक अविश्वसनीय है।',
            'ta': 'வணக்கம், நான் ஆங்கிலத்தில் பேசுகிறேன். இந்த தொழில்நுட்பம் நம்பமுடியாதது.',
            'te': 'హలో, నేను ఇంగ్లీషులో మాట్లాడుతున్నాను. ఈ సాంకేతికత నమ్మశక్యం కాదు.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ಇಂಗ್ಲೀಷ್ನಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಈ ತಂತ್ರಜ್ಞಾನ ನಂಬಲಾಗದಂತಹದು.',
            'ml': 'ഹലോ, ഞാൻ ഇംഗ്ലീഷിൽ സംസാരിക്കുന്നു. ഈ സാങ്കേതികവിദ്യ അവിശ്വസനീയമാണ്.',
            'mr': 'नमस्कार, मी इंग्रजीत बोलत आहे. हे तंत्रज्ञान अविश्वसनीय आहे.',
            'bn': 'হ্যালো, আমি ইংরেজিতে কথা বলছি। এই প্রযুক্তি অবিশ্বাস্য।',
            'gu': 'હેલો, હું અંગ્રેજીમાં બોલી રહ્યો છું. આ ટેકનોલોજી અવિશ્વસનીય છે.'
        }
    },
    'ta': {
        text: 'வணக்கம், நான் தமிழில் பேசுகிறேன். இது மிகவும் பயனுள்ளதாக இருக்கிறது.',
        to: {
            'en': 'Hello, I am speaking in Tamil. This is very useful.',
            'hi': 'नमस्ते, मैं तमिल में बोल रहा हूँ। यह बहुत उपयोगी है।',
            'te': 'నమస్కారం, నేను తమిళంలో మాట్లాడుతున్నాను. ఇది చాలా ఉపయోగకరమైనది.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ತಮಿಳಿನಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿದೆ.',
            'ml': 'നമസ്കാരം, ഞാൻ തമിഴിൽ സംസാരിക്കുന്നു. ഇത് വളരെ ഉപയോഗപ്രദമാണ്.',
            'mr': 'नमस्कार, मी तमिळ भाषेत बोलत आहे. हे खूप उपयुक्त आहे.',
            'bn': 'নমস্কার, আমি তামিল ভাষায় কথা বলছি। এটি খুবই উপযোগী।',
            'gu': 'નમસ્તે, હું તમિલમાં બોલી રહ્યો છું. આ ખૂબ જ ઉપયોગી છે.'
        }
    },
    'te': {
        text: 'నమస్కారం, నేను తెలుగులో మాట్లాడుతున్నాను. ఇది చాలా మంచి సాధనం.',
        to: {
            'en': 'Hello, I am speaking in Telugu. This is a great tool.',
            'hi': 'नमस्ते, मैं तेलुगू में बोल रहा हूँ। यह एक बेहतरीन उपकरण है।',
            'ta': 'வணக்கம், நான் தெலுங்கில் பேசுகிறேன். இது ஒரு சிறந்த கருவி.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ತೆಲುಗಿನಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ಉತ್ತಮ ಸಾಧನವಾಗಿದೆ.',
            'ml': 'നമസ്കാരം, ഞാൻ തെലുങ്കിൽ സംസാരിക്കുന്നു. ഇത് മികച്ച ഉപകരണമാണ്.',
            'mr': 'नमस्कार, मी तेलुगू भाषेत बोलत आहे. हे एक उत्कृष्ट साधन आहे.',
            'bn': 'নমস্কার, আমি তেলেগু ভাষায় কথা বলছি। এটি একটি দুর্দান্ত সরঞ্জাম।',
            'gu': 'નમસ્તે, હું તેલુગુમાં બોલી રહ્યો છું. આ એક મહાન સાધન છે.'
        }
    },
    'kn': {
        text: 'ನಮಸ್ಕಾರ, ನಾನು ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ಅದ್ಭುತವಾಗಿದೆ.',
        to: {
            'en': 'Hello, I am speaking in Kannada. This is wonderful.',
            'hi': 'नमस्ते, मैं कन्नड़ में बोल रहा हूँ। यह अद्भुत है।',
            'ta': 'வணக்கம், நான் கன்னடத்தில் பேசுகிறேன். இது அற்புதமானது.',
            'te': 'నమస్కారం, నేను కన్నడంలో మాట్లాడుతున్నాను. ఇది అద్భుతమైనది.',
            'ml': 'നമസ്കാരം, ഞാൻ കന്നഡയിൽ സംസാരിക്കുന്നു. ഇത് അതിശയകരമാണ്.',
            'mr': 'नमस्कार, मी कन्नड भाषेत बोलत आहे. हे अद्भुत आहे.',
            'bn': 'নমস্কার, আমি কন্নড় ভাষায় কথা বলছি। এটি বিস্ময়কর।',
            'gu': 'નમસ્તે, હું કન્નડમાં બોલી રહ્યો છું. આ અદ્ભુત છે.'
        }
    },
    'ml': {
        text: 'നമസ്കാരം, ഞാൻ മലയാളത്തിൽ സംസാരിക്കുന്നു. ഇത് വളരെ നല്ലതാണ്.',
        to: {
            'en': 'Hello, I am speaking in Malayalam. This is very good.',
            'hi': 'नमस्ते, मैं मलयालम में बोल रहा हूँ। यह बहुत अच्छा है।',
            'ta': 'வணக்கம், நான் மலையாளத்தில் பேசுகிறேன். இது மிகவும் நல்லது.',
            'te': 'నమస్కారం, నేను మలయాళంలో మాట్లాడుతున్నాను. ఇది చాలా మంచిది.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ಮಲಯಾಳಂನಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ತುಂಬಾ ಒಳ್ಳೆಯದು.',
            'mr': 'नमस्कार, मी मल्याळम भाषेत बोलत आहे. हे खूप चांगले आहे.',
            'bn': 'নমস্কার, আমি মালয়ালম ভাষায় কথা বলছি। এটি খুবই ভালো।',
            'gu': 'નમસ્તે, હું મલયાળમમાં બોલી રહ્યો છું. આ ખૂબ જ સારું છે.'
        }
    },
    'mr': {
        text: 'नमस्कार, मी मराठीत बोलत आहे. हे खूप उपयुक्त आहे.',
        to: {
            'en': 'Hello, I am speaking in Marathi. This is very useful.',
            'hi': 'नमस्ते, मैं मराठी में बोल रहा हूँ। यह बहुत उपयोगी है।',
            'ta': 'வணக்கம், நான் மராத்தியில் பேசுகிறேன். இது மிகவும் பயனுள்ளதாக இருக்கிறது.',
            'te': 'నమస్కారం, నేను మరాఠీలో మాట్లాడుతున్నాను. ఇది చాలా ఉపయోగకరమైనది.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ಮರಾಠಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿದೆ.',
            'ml': 'നമസ്കാരം, ഞാൻ മറാത്തിയിൽ സംസാരിക്കുന്നു. ഇത് വളരെ ഉപയോഗപ്രദമാണ്.',
            'bn': 'নমস্কার, আমি মারাঠি ভাষায় কথা বলছি। এটি খুবই উপযোগী।',
            'gu': 'નમસ્તે, હું મરાઠીમાં બોલી રહ્યો છું. આ ખૂબ જ ઉપયોગી છે.'
        }
    },
    'bn': {
        text: 'নমস্কার, আমি বাংলায় কথা বলছি। এটি একটি দুর্দান্ত উদ্ভাবন।',
        to: {
            'en': 'Hello, I am speaking in Bengali. This is a great innovation.',
            'hi': 'नमस्ते, मैं बंगाली में बोल रहा हूँ। यह एक बेहतरीन नवाचार है।',
            'ta': 'வணக்கம், நான் வங்காளத்தில் பேசுகிறேன். இது ஒரு சிறந்த கண்டுபிடிப்பு.',
            'te': 'నమస్కారం, నేను బెంగాలీలో మాట్లాడుతున్నాను. ఇది గొప్ప ఆవిష్కరణ.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ಬೆಂಗಾಲಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ಉತ್ತಮ ನಾವೀನ್ಯತೆಯಾಗಿದೆ.',
            'ml': 'നമസ്കാരം, ഞാൻ ബംഗാളിയിൽ സംസാരിക്കുന്നു. ഇത് മികച്ച നവീകരണമാണ്.',
            'mr': 'नमस्कार, मी बंगाली भाषेत बोलत आहे. हे एक उत्कृष्ट नवकल्पना आहे.',
            'gu': 'નમસ્તે, હું બંગાળીમાં બોલી રહ્યો છું. આ એક મહાન નવીનતા છે.'
        }
    },
    'gu': {
        text: 'નમસ્તે, હું ગુજરાતીમાં બોલી રહ્યો છું. આ ખૂબ જ સરસ છે.',
        to: {
            'en': 'Hello, I am speaking in Gujarati. This is very nice.',
            'hi': 'नमस्ते, मैं गुजराती में बोल रहा हूँ। यह बहुत अच्छा है।',
            'ta': 'வணக்கம், நான் குஜராத்தியில் பேசுகிறேன். இது மிகவும் நல்லது.',
            'te': 'నమస్కారం, నేను గుజరాతీలో మాట్లాడుతున్నాను. ఇది చాలా మంచిది.',
            'kn': 'ನಮಸ್ಕಾರ, ನಾನು ಗುಜರಾತಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಇದು ತುಂಬಾ ಒಳ್ಳೆಯದು.',
            'ml': 'നമസ്കാരം, ഞാൻ ഗുജരാതിയിൽ സംസാരിക്കുന്നു. ഇത് വളരെ നല്ലതാണ്.',
            'mr': 'नमस्कार, मी गुजराती भाषेत बोलत आहे. हे खूप चांगले आहे.',
            'bn': 'নমস্কার, আমি গুজরাটি ভাষায় কথা বলছি। এটি খুবই ভালো।'
        }
    }
};

// Animated Demo Controller
class AnimatedDemo {
    constructor() {
        this.isRunning = false;
        this.isPaused = false;
        this.currentIndex = 0;
        this.intervalId = null;
        this.isUpdating = false; // Prevent overlapping updates
        this.languageOrder = ['hi', 'en', 'ta', 'te', 'kn', 'ml', 'mr', 'bn', 'gu'];
        // Create diverse translation pairs to showcase all languages
        // Each pair shows a different language combination
        this.translationPairs = [
            { from: 'hi', to: 'en' },  // Hindi → English
            { from: 'en', to: 'ta' },  // English → Tamil
            { from: 'ta', to: 'te' },  // Tamil → Telugu
            { from: 'te', to: 'kn' },  // Telugu → Kannada
            { from: 'kn', to: 'ml' },  // Kannada → Malayalam
            { from: 'ml', to: 'mr' },  // Malayalam → Marathi
            { from: 'mr', to: 'bn' },  // Marathi → Bengali
            { from: 'bn', to: 'gu' },  // Bengali → Gujarati
            { from: 'gu', to: 'hi' }   // Gujarati → Hindi (completing the cycle)
        ];
        this.init();
    }

    init() {
        this.setupLanguageGrid();
        this.setupControls();
        this.resetDisplay();
    }

    setupLanguageGrid() {
        const langGrid = document.getElementById('lang-grid');
        if (!langGrid) return;
        
        langGrid.innerHTML = '';
        this.languageOrder.forEach(langCode => {
            const lang = languages[langCode];
            const item = document.createElement('div');
            item.className = 'lang-item';
            item.id = `lang-${langCode}`;
            item.textContent = `${lang.flag} ${lang.name}`;
            langGrid.appendChild(item);
        });
    }

    setupControls() {
        const startBtn = document.getElementById('start-demo');
        const pauseBtn = document.getElementById('pause-demo');
        const resetBtn = document.getElementById('reset-demo');

        if (startBtn) {
            startBtn.addEventListener('click', () => this.start());
        }
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => this.pause());
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.reset());
        }
    }

    start() {
        if (this.isRunning && !this.isPaused) return;
        
        this.isRunning = true;
        this.isPaused = false;
        
        document.getElementById('start-demo').style.display = 'none';
        document.getElementById('pause-demo').style.display = 'flex';
        
        // Start the animation sequence
        this.animateSequence();
    }

    pause() {
        this.isPaused = true;
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
        document.getElementById('start-demo').style.display = 'flex';
        document.getElementById('pause-demo').style.display = 'none';
    }

    reset() {
        this.isRunning = false;
        this.isPaused = false;
        this.isUpdating = false;
        this.currentIndex = 0;
        if (this.intervalId) {
            clearTimeout(this.intervalId);
            this.intervalId = null;
        }
        const startBtn = document.getElementById('start-demo');
        const pauseBtn = document.getElementById('pause-demo');
        if (startBtn) startBtn.style.display = 'flex';
        if (pauseBtn) pauseBtn.style.display = 'none';
        this.resetDisplay();
        // Clear all language states
        document.querySelectorAll('.lang-item').forEach(item => {
            item.classList.remove('active', 'completed');
        });
    }

    resetDisplay() {
        this.updateARText('left', ['', ''], 'Detecting...', 'Listening...');
        this.updateARText('right', ['', ''], 'Translating...', 'Ready');
        this.updateSpeaker('Ready');
    }

    animateSequence() {
        if (this.isPaused || this.isUpdating) return;

        // Show rapid language switching at the end
        if (this.currentIndex >= this.translationPairs.length) {
            this.showRapidSwitch();
            return;
        }

        this.isUpdating = true;
        const pair = this.translationPairs[this.currentIndex];
        const fromLang = pair.from;
        const toLang = pair.to;
        
        const fromLangData = languages[fromLang];
        const toLangData = languages[toLang];
        const translation = translations[fromLang];
        
        if (!translation) {
            this.currentIndex++;
            this.isUpdating = false;
            this.animateSequence();
            return;
        }

        // Get the original text and translation
        const originalText = translation.text;
        let translatedText = translation.to[toLang];
        
        // Fallback to English if direct translation not available
        if (!translatedText && translation.to['en']) {
            translatedText = translation.to['en'];
        } else if (!translatedText) {
            translatedText = 'Translation in progress...';
        }
        
        this.showTranslation(fromLang, toLang, originalText, translatedText, fromLangData, toLangData);
    }

    showTranslation(fromLang, toLang, originalText, translatedText, fromLangData, toLangData) {
        // Update language indicators (no transition needed for these)
        this.updateLanguageBadge('left', fromLangData.name);
        this.updateLanguageBadge('right', toLangData.name);
        this.updateSpeaker(`Speaking ${fromLangData.name} → ${toLangData.name}`);

        // Mark both languages as active
        this.setLanguageActive(fromLang);
        this.setLanguageActive(toLang);

        // Show original text with typing effect
        const originalLines = this.splitText(originalText);
        this.typeText('left', originalLines, () => {
            // After typing, show translation
            setTimeout(() => {
                const translatedLines = this.splitText(translatedText);
                this.typeText('right', translatedLines, () => {
                    // Mark languages as completed
                    this.setLanguageCompleted(fromLang);
                    this.setLanguageCompleted(toLang);
                    
                    // Wait before next language pair
                    setTimeout(() => {
                        this.currentIndex++;
                        this.isUpdating = false;
                        this.animateSequence();
                    }, 2500);
                });
            }, 800); // Increased delay for smoother transition
        });
    }

    showRapidSwitch() {
        // Rapid switching through all languages showing diverse pairs
        let rapidIndex = 0;
        const rapidSwitch = () => {
            if (this.isPaused) return;
            
            if (rapidIndex >= this.translationPairs.length * 2) {
                // End of demo - show all languages completed
                this.showAllLanguagesComplete();
                return;
            }

            const pairIndex = rapidIndex % this.translationPairs.length;
            const pair = this.translationPairs[pairIndex];
            const fromLang = pair.from;
            const toLang = pair.to;
            
            const fromLangData = languages[fromLang];
            const toLangData = languages[toLang];
            const translation = translations[fromLang];

            if (translation) {
                this.updateLanguageBadge('left', fromLangData.name);
                this.updateLanguageBadge('right', toLangData.name);
                
                const originalText = translation.text;
                const originalLines = this.splitText(originalText);
                const translatedText = translation.to[toLang] || translation.to['en'] || 'Translation...';
                const translatedLines = this.splitText(translatedText);
                
                this.updateARText('left', originalLines, fromLangData.name, 'Live');
                this.updateARText('right', translatedLines, toLangData.name, 'Live');
                this.updateSpeaker(`Rapid: ${fromLangData.name} → ${toLangData.name}`);
                this.setLanguageActive(fromLang);
                this.setLanguageActive(toLang);
            }

            rapidIndex++;
            this.intervalId = setTimeout(rapidSwitch, 1000); // Increased from 600ms to 1000ms for smoother transitions
        };

        rapidSwitch();
    }

    showAllLanguagesComplete() {
        // Show completion message
        this.updateLanguageBadge('left', 'ALL');
        this.updateLanguageBadge('right', 'LANGUAGES');
        this.updateARText('left', ['All 9 Indian', 'languages covered!'], 'Complete', 'Done');
        this.updateARText('right', ['Real-time translation', 'across India'], 'Complete', 'Done');
        this.updateSpeaker('Demo Complete');
        
        // Mark all languages as completed
        this.languageOrder.forEach(lang => {
            this.setLanguageCompleted(lang);
        });
        
        // Reset after showing completion
        setTimeout(() => {
            this.reset();
        }, 3000);
    }

    splitText(text) {
        const words = text.split(' ');
        const mid = Math.ceil(words.length / 2);
        return [
            words.slice(0, mid).join(' '),
            words.slice(mid).join(' ')
        ];
    }

    typeText(side, lines, callback) {
        const line1El = document.getElementById(`ar-text-${side}-1`);
        const line2El = document.getElementById(`ar-text-${side}-2`);
        
        if (!line1El || !line2El) {
            if (callback) callback();
            return;
        }

        // Fade out first
        line1El.classList.remove('active');
        line2El.classList.remove('active');

        // Wait for fade out, then clear and start typing
        setTimeout(() => {
            line1El.textContent = '';
            line2El.textContent = '';

            // Type first line
            this.typeLine(line1El, lines[0] || '', () => {
                // Type second line
                if (lines[1]) {
                    this.typeLine(line2El, lines[1], () => {
                        if (callback) callback();
                    });
                } else {
                    if (callback) callback();
                }
            });
        }, 200); // Wait for fade transition
    }

    typeLine(element, text, callback) {
        element.classList.add('active');
        let index = 0;
        const speed = 30; // milliseconds per character

        const type = () => {
            if (index < text.length) {
                element.textContent = text.substring(0, index + 1);
                index++;
                setTimeout(type, speed);
            } else {
                if (callback) callback();
            }
        };

        type();
    }

    updateARText(side, lines, langName, status) {
        const line1El = document.getElementById(`ar-text-${side}-1`);
        const line2El = document.getElementById(`ar-text-${side}-2`);
        const statusEl = document.getElementById(`status-${side}`);

        // Fade out first, then update content
        if (line1El) {
            line1El.classList.remove('active');
            // Use requestAnimationFrame for smooth transition
            requestAnimationFrame(() => {
                setTimeout(() => {
                    line1El.textContent = lines[0] || '';
                    line1El.classList.add('active');
                }, 50);
            });
        }
        if (line2El) {
            line2El.classList.remove('active');
            requestAnimationFrame(() => {
                setTimeout(() => {
                    line2El.textContent = lines[1] || '';
                    line2El.classList.add('active');
                }, 50);
            });
        }
        if (statusEl) {
            statusEl.textContent = status;
        }
    }

    updateLanguageBadge(side, langName) {
        const badge = document.getElementById(`lang-badge-${side}`);
        if (badge) {
            badge.textContent = langName.toUpperCase();
        }
    }

    updateSpeaker(label) {
        const speakerLabel = document.getElementById('speaker-label');
        if (speakerLabel) {
            speakerLabel.textContent = label;
        }
    }

    setLanguageActive(langCode) {
        // Add active to specified language (allows multiple active)
        const item = document.getElementById(`lang-${langCode}`);
        if (item) {
            item.classList.remove('completed');
            item.classList.add('active');
        }
    }

    setLanguageCompleted(langCode) {
        const item = document.getElementById(`lang-${langCode}`);
        if (item) {
            item.classList.remove('active');
            item.classList.add('completed');
        }
    }
}

// Initialize animated demo when DOM is ready
let animatedDemo;
document.addEventListener('DOMContentLoaded', () => {
    animatedDemo = new AnimatedDemo();
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and use case cards
document.querySelectorAll('.feature-card, .use-case-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const glasses = document.querySelector('.smart-glasses');
    if (glasses) {
        glasses.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Additional initialization
document.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization can go here
});

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
