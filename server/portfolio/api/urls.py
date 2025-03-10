from .views import projects, contact, blogs
from django.urls import path # type: ignore

urlpatterns = [
    path('projects/', projects, name='projects'),
    path('contacts/', contact, name='contact'),
    path('blogs/', blogs, name='blogs'),
]