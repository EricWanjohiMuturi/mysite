from django.db import models # type: ignore
from django.utils.timezone import now # type: ignore

# Create your models here.

SERVICE=[
    ("Web Design","Web Design"),
    ("Custom Software Development","Custom Software Development"),
    ("Search Engine Development","Search Engine Development"),
    ("Mobile App Development","Mobile App Development"),
    ("Cloud & Hosting Services","Cloud & Hosting Services"),
    ("ChatBot & Automations","ChatBot & Automations"),
    ("Other","Other"),
]

class Project(models.Model):
    title = models.CharField(max_length=100)
    service = models.CharField(max_length=200, choices=SERVICE, null=True, blank=True)
    short_description = models.CharField(max_length = 1000)
    long_description = models.TextField(max_length=300)
    solution = models.CharField(max_length=500)
    stack_technology = models.CharField(max_length=200)
    fimage = models.ImageField(upload_to='images/')
    gimage1 =models.ImageField(upload_to='images/')
    gimage2 =models.ImageField(upload_to='images/')
    gimage3 =models.ImageField(upload_to='images/')
    url = models.URLField(max_length=200)
    status = models.IntegerField()
    created_at = models.DateTimeField(null=True, blank=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title

CHOICES=[
    ("Web Design","Web Design"),
    ("Custom Software Development","Custom Software Development"),
    ("Search Engine Development","Search Engine Development"),
    ("Mobile App Development","Mobile App Development"),
    ("Cloud & Hosting Services","Cloud & Hosting Services"),
    ("ChatBot & Automations","ChatBot & Automations"),
    ("Other","Other"),
]

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=250)
    phone = models.IntegerField()
    service =models.CharField(max_length=200, choices=CHOICES, null=True, blank=True)
    Message = models.TextField(max_length=300)
    contacted_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Insight(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=200)
    topic = models.CharField(max_length=200)
    small_description = models.TextField(max_length=100)
    f_description = models.TextField(max_length=600)
    l_description = models.TextField(max_length=600)
    fimage = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title,