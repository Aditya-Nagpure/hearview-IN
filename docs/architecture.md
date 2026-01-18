## Smart Glasses – System Architecture

```mermaid
flowchart TB
    subgraph hardware [Smart Glasses Hardware]
        Mic[Microphone Array]
        Display[Micro Display]
        Processor[Edge Processor<br/>Raspberry Pi / Jetson Nano]
    end
    
    subgraph audio_processing [Audio Processing Pipeline]
        NoiseSupp[Noise Suppression<br/>RNNoise]
        VAD[Voice Activity Detection<br/>WebRTC VAD]
        Buffer[Audio Buffer<br/>Streaming Chunks]
    end
    
    subgraph asr [Speech Recognition]
        Whisper[Whisper.cpp<br/>On-Device ASR]
        LangDetect[Language Detection<br/>langdetect]
    end
    
    subgraph translation [Translation Layer]
        Translator[OPUS-MT / IndicTrans<br/>Multi-lingual Translation]
        CodeMix[Code-Mixing Handler<br/>Hinglish Support]
    end
    
    subgraph display [Display & UI]
        Renderer[Text Renderer]
        SubtitleEngine[Subtitle Engine]
        MobileApp[Mobile Companion App<br/>Optional]
    end
    
    Mic --> NoiseSupp
    NoiseSupp --> VAD
    VAD --> Buffer
    Buffer --> Whisper
    Whisper --> LangDetect
    LangDetect --> Translator
    Translator --> CodeMix
    CodeMix --> Renderer
    Renderer --> SubtitleEngine
    SubtitleEngine --> Display
    SubtitleEngine --> MobileApp
    
    Processor -.runs.-> audio_processing
    Processor -.runs.-> asr
    Processor -.runs.-> translation
    Processor -.runs.-> display
