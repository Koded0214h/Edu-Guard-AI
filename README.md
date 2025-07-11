# EduGuard AI

EduGuard AI is your academic bodyguard — an AI-powered platform that protects students and schools from scams, fake offers, and forged academic documents. It detects fraud in WhatsApp messages, emails, admission/job letters, and even result slips.

## Features
- **AI Scam Detection:** Instantly scan suspicious text or upload documents for authenticity checks.
- **Document & Text Analysis:** Upload PDFs, DOCX, images, or paste text to check for scams or forgeries.
- **Scam Reporting:** Users can report suspicious offers, messages, or documents.
- **User Authentication:** Secure signup/login with token-based authentication.
- **Dashboard:** View your scan/report history and statistics.
- **Education:** Learn how to avoid scams and protect yourself.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Django, Django REST Framework
- **AI:** Google Gemini API (for text/image classification, summarization, keyword extraction)
- **Database:** SQLite (default, can be swapped for Postgres/MySQL)

## Project Structure
```
EduGuard AI/
├── backend/         # Django backend (API, models, AI integration)
├── frontend/        # React frontend (user interface)
├── README.md        # This file
```

## Getting Started

### 1. Backend Setup (Django)
1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your secrets (e.g., `GEMINI_API_KEY`).
3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```
4. **Create a superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```
5. **Run the backend server:**
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://127.0.0.1:8000/api/`

### 2. Frontend Setup (React)
1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Configure API endpoint:**
   - Edit `frontend/src/api.js` if you need to change the backend URL.
3. **Run the frontend (development):**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

## Usage
- **Login/Signup:** Create an account or log in.
- **Scan Text:** Paste suspicious text to check for scams.
- **Upload Document:** Upload files (PDF, DOCX, JPG, PNG) for authenticity analysis.
- **Report Scam:** Fill out the form to report a scam (with optional evidence).
- **Dashboard:** View your scan/report history and stats.

## API & Authentication
- All protected endpoints require an `Authorization: Token <your_token>` header.
- On login/signup, the backend returns a token. Store it in `localStorage` (handled by the frontend).
- File uploads must use `multipart/form-data`.

## Production Setup

### 1. Build the Frontend
```bash
cd frontend
npm run build
```
- This creates a `dist/` folder with static files.

### 2. Serve the Frontend
- **Option 1: With Django**
  - Move/copy the `dist/` folder to your Django `static/` directory or use [WhiteNoise](https://whitenoise.evans.io/) to serve static files.
  - Update Django `settings.py`:
    ```python
    STATICFILES_DIRS = [BASE_DIR / 'frontend/dist']
    ```
  - Make sure your Django URLs serve the React app for all non-API routes.
- **Option 2: Standalone Static Server**
  - Use [serve](https://www.npmjs.com/package/serve):
    ```bash
    npx serve -s dist
    ```
  - Or deploy to Netlify, Vercel, or any static hosting provider.

### 3. Environment Variables
- Set your backend API URL in the frontend if deploying separately (see `frontend/src/api.js`).
- Set all secrets (API keys, etc.) in your backend environment.

### 4. Secure Your Deployment
- Use HTTPS in production.
- Set Django `DEBUG = False` and configure `ALLOWED_HOSTS`.
- Use a production-ready database (Postgres, MySQL, etc.) if needed.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
