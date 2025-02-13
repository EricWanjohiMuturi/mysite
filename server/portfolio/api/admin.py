from django.contrib import admin # type: ignore
from .models import Project, Contact, Insight

# Register your models here.
@admin.register(Project)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = [fields.name for fields in Project._meta.get_fields()]

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = [fields.name for fields in Contact._meta.get_fields()]

@admin.register(Insight)
class BlogsAdmin(admin.ModelAdmin):
    list_display = [fields.name for fields in Insight._meta.get_fields()]
