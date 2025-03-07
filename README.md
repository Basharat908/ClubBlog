# Club Blog Backend

A Django-based backend for the Club Blog application, providing a robust API and admin interface for managing blog content.

## Features

- 🔒 Secure authentication system
- 📝 Blog post management
- 💬 Comment functionality
- 📁 File upload/download system
- 👥 User permissions and roles
- 🎯 RESTful API endpoints
- 📊 Django Admin interface

## Tech Stack

- Python 3.8+
- Django 4.x
- Django REST Framework
- SQLite (default database)
- Pillow for image handling

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
```bash
# Windows
venv\Scripts\activate

# Unix/MacOS
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create a superuser:
```bash
python manage.py createsuperuser
```

6. Start the development server:
```bash
python manage.py runserver
```

The server will start at `http://localhost:8000`

## API Endpoints

### Blog Posts
- `GET /api/posts/` - List all posts
- `POST /api/posts/` - Create a new post (admin only)
- `GET /api/posts/{id}/` - Get post details
- `PUT /api/posts/{id}/` - Update a post (admin only)
- `DELETE /api/posts/{id}/` - Delete a post (admin only)

### Comments
- `GET /api/comments/` - List all comments
- `POST /api/comments/` - Create a new comment
- `GET /api/comments/{id}/` - Get comment details
- `PUT /api/comments/{id}/` - Update a comment (owner/admin only)
- `DELETE /api/comments/{id}/` - Delete a comment (owner/admin only)

## Admin Interface

Access the Django admin interface at `http://localhost:8000/admin` to manage:
- Blog posts
- Comments
- Users
- Permissions

## Project Structure

```
backend/
├── blog/                   # Main app directory
│   ├── migrations/        # Database migrations
│   ├── admin.py          # Admin interface configuration
│   ├── models.py         # Database models
│   ├── serializers.py    # API serializers
│   ├── urls.py           # URL routing
│   └── views.py          # API views
├── club_blog/            # Project settings directory
│   ├── settings.py       # Project settings
│   ├── urls.py          # Project URL configuration
│   └── wsgi.py          # WSGI configuration
├── manage.py             # Django management script
├── requirements.txt      # Project dependencies
└── README.md            # This file
```

## Development

### Adding New Features
1. Create models in `blog/models.py`
2. Create serializers in `blog/serializers.py`
3. Add views in `blog/views.py`
4. Update URL patterns in `blog/urls.py`
5. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

### Code Style
- Follow PEP 8 guidelines
- Use meaningful variable and function names
- Add docstrings for functions and classes
- Keep functions small and focused

## Security

- CORS is configured for frontend access
- Authentication required for admin actions
- File upload validation
- XSS protection
- CSRF protection enabled

## License

MIT License - Feel free to use this project for your own purposes.
