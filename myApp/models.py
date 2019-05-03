from django.db import models
from django.contrib import auth
from django.contrib.auth.models import User

class University(models.Model):
    name = models.CharField(verbose_name="نام دانشگاه", max_length = 40)
    has_associates_degree = models.NullBooleanField(verbose_name="مقطع کاردانی")
    has_bachelors_degree = models.NullBooleanField(verbose_name="مقطع کارشناسی")
    has_masters_degree = models.NullBooleanField(verbose_name="مقطع کارشناسی ارشد")
    has_doctorate_degree = models.NullBooleanField(verbose_name="مقطع دکتری")

class Faculty(models.Model):
    name = models.CharField(verbose_name="نام دانشکده" , max_length = 40)
    universiy = models.ForeignKey(
        'University', 
        on_delete=models.CASCADE,
        verbose_name="نام دانشگاه"
    )    

 
class Chart(models.Model):
    title = models.CharField(verbose_name="عنوان جارت" ,max_length = 40)
    is_active = models.BooleanField(verbose_name="فعال بودن")
    degree = models.CharField(verbose_name="مقطع" , max_length = 20)
    acceptance_date = models.DateField(verbose_name="تاریخ تصویب")
    course = models.ManyToManyField("Course")
    faculty = models.ForeignKey(
        'Faculty', 
        on_delete=models.CASCADE,
        verbose_name="دانشکده"
    ) 

class Study(models.Model):
    degree = models.IntegerField(verbose_name="مقطع تحصیلی")
    entrance_year = models.DateField(verbose_name="سال ورود")
    chart = models.ForeignKey(
        'Chart', 
        on_delete=models.CASCADE,
        verbose_name="چارت"
    )

class Scores(models.Model):
    score = models.FloatField(verbose_name="نمره")
    study = models.ForeignKey(
        'Study', 
        on_delete=models.CASCADE,
        verbose_name="تحصیل"
    )
    course = models.ForeignKey(
        'Course', 
        on_delete=models.CASCADE,
        verbose_name="درس"
    )

class Course(models.Model):
    title = models.CharField(verbose_name="عنوان",max_length = 20)
    course_type = models.IntegerField(verbose_name="نوع درس",max_length = 20)
    vahed_nazari = models.IntegerField(verbose_name="تعداد واحد نظری")
    vahed_amali = models.IntegerField(verbose_name="تعداد واحد عملی")
    corequisite_courses = models.ManyToManyField( #همنیاز
        'self', 
        verbose_name="هم‌نیاز",
        related_name="corequisites"
    )
    prerequisite_courses = models.ManyToManyField(
        'self', 
        verbose_name="پیش‌نیاز",
        related_name="prerequisites"
    )