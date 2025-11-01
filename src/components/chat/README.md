# Smart Chatbot with iOS-style Design 🤖💬

## 🎨 **iOS-style Chat Bubbles**

Chatbot ini menggunakan desain bubble chat yang mirip dengan **iOS Messages** dengan:

- **Blue bubbles** untuk pesan user (kanan)
- **Gray bubbles** untuk pesan bot (kiri)
- **Chat tails** (ekor bubble) yang authentic
- **Smooth gradients** dan shadows
- **Typing indicator** dengan animasi dots

## 🧠 **Smart Intent Detection System**

Chatbot ini menggunakan sistem **Natural Language Processing (NLP)** sederhana yang dapat memahami berbagai cara bertanya dalam **Bahasa Indonesia** dan **English**.

## 🎯 **Supported Intents**

### 1. **Projects Intent**

**Mengenali pertanyaan tentang project/karya:**

**Indonesian:**

- "Apa saja project yang pernah dibuat?"
- "Sudah mengerjakan apa saja?"
- "Karya apa yang pernah dibuat?"
- "Pernah bikin aplikasi apa?"
- "Portfolio kamu gimana?"

**English:**

- "What have you built?"
- "What projects did you create?"
- "Show me your work"
- "What applications have you made?"

### 2. **Skills Intent**

**Mengenali pertanyaan tentang kemampuan/teknologi:**

**Indonesian:**

- "Kemampuan apa yang dikuasai?"
- "Bisa teknologi apa saja?"
- "Keahlian programming apa?"
- "Mahir bahasa pemrograman apa?"

**English:**

- "What are your skills?"
- "What technologies do you know?"
- "What can you do?"
- "What's your expertise?"

### 3. **Experience Intent**

**Mengenali pertanyaan tentang pengalaman kerja:**

**Indonesian:**

- "Pengalaman kerja gimana?"
- "Pernah kerja dimana?"
- "Background karir seperti apa?"
- "Riwayat pekerjaan sebelumnya?"

**English:**

- "What's your work history?"
- "Tell me about your experience"
- "What's your background?"
- "Where did you work before?"

### 4. **Contact Intent**

**Mengenali pertanyaan tentang kontak:**

**Indonesian:**

- "Bagaimana cara menghubungi?"
- "Kontak kamu apa?"
- "Bisa kerja sama nggak?"
- "Email atau WA berapa?"

**English:**

- "How can I contact you?"
- "How to reach you?"
- "Can we collaborate?"
- "What's your email?"

### 5. **Hobbies Intent**

**Mengenali pertanyaan tentang hobi:**

**Indonesian:**

- "Hobi apa saja?"
- "Suka ngapain di waktu luang?"
- "Interest kamu apa?"

**English:**

- "What are your hobbies?"
- "What do you like to do?"
- "What are your interests?"

## 🔧 **Technical Implementation**

### **Regex Pattern Matching**

```typescript
// Example: Projects detection
if (
  /(project|projek|karya|portfolio|kerja|buat|bikin|develop|kerjaan|hasil|aplikasi|website|app|sudah.*buat|pernah.*buat|mengerjakan.*apa|what.*built|what.*made|what.*created|show.*work|your.*work)/.test(
    text
  )
) {
  return "projects";
}
```

### **Smart Fallback System**

- Jika tidak mengenali intent → memberikan panduan cara bertanya
- Mendukung greeting dan thanks
- Response yang friendly dan helpful

## 🚀 **Features**

- ✅ **Bilingual Support** (Indonesian + English)
- ✅ **Flexible Questioning** (berbagai cara bertanya)
- ✅ **Smart Pattern Recognition** (regex-based)
- ✅ **Contextual Responses** (jawaban sesuai intent)
- ✅ **Fallback Guidance** (panduan jika tidak mengerti)
- ✅ **Natural Conversation** (greeting, thanks, dll)

## 🎨 **Example Conversations**

```
User: "Sudah pernah bikin aplikasi apa aja?"
Bot: "I've built several exciting projects including:
🚀 E-Commerce Dashboard with real-time analytics
📱 Task Management App with drag-and-drop functionality..."

User: "Kemampuan teknologi apa yang dikuasai?"
Bot: "Hi! I'm Dhini Afifah, a passionate Frontend Developer specializing in:
⚛️ React & TypeScript (90% proficiency)
🎨 Modern CSS & SCSS (88% proficiency)..."

User: "Gimana cara kontaknya?"
Bot: "You can reach me through multiple channels:
📧 Email: dhiniafifah.work@gmail.com
💼 LinkedIn: linkedin.com/in/siti-maryama-ramadhini-afifah/..."
```

## 🔮 **Future Enhancements**

1. **AI Integration** - OpenAI/Gemini API untuk understanding yang lebih baik
2. **Learning System** - Menyimpan pertanyaan yang tidak dikenali
3. **Context Memory** - Mengingat percakapan sebelumnya
4. **Sentiment Analysis** - Mendeteksi mood user
5. **Multi-language** - Support bahasa lain
