# Student_Org_Site_Backend

This README outlines the details of the production environment of [Student_Org_Site] (https://github.com/bhealy/Student-Org-Site).
This application is intended for student organizations to quickly and easily create a website.

## Prerequisites

* [Git](http://git-scm.com/)
* [Python](https://www.python.org/)
* [Django](https://www.djangoproject.com/)
* [Pytz](https://pypi.python.org/pypi/pytz/)
* [Django-Axes](https://github.com/django-pci/django-axes)
* A web-facing server to host the application on

## Installation

1. ```cd /var/www/```
  1. if the directory doesn't exist, create it using ```mkdir /var/www```
2. ```git clone https://github.com/clenk/Student_Org_Site_Backend.git```
3. Configure the localsettings with how Dr. Hale describes in his [Apache and Django configuration guide] (https://dl.dropboxusercontent.com/u/4594444/ia8080-labs/lab2-steal-server.html)
4. ```cd /var/www/Student_Org_Site_Backend```
5. ```sudo chown :www-data -R Student_Org_Site_Backend```
6. ```vim localsettings```
  1. change ```IS_PROD = True``` to ```IS_PROD = False```
7. ```vim ../localsettings```
  1. change ```IS_PROD = True``` to ```IS_PROD = False```
8. ```python ../manage syncdb```
9. ```python ../manage makemigrations```
10. ```python ../manage migrate```
11. ```python vim localsettings```
  1. Change ```IS_PROD = False``` to ```IS_PROD = True```
12. ```python vim ../localsettings```
  1. Change ```IS_PROD = False``` to ```IS_PROD = True```
13. ```sudo chmod 775 db.sqlite3```
14. ```vim settings.py```
  1. Change ```DEBUG = True``` to ```DEBUG = False```
15. ```sudo apachectl restart```
16. Now you should be good to go!

## Administration
1. To log into the admin panel:
  1. Go to <i>```clubApplicationURL/admin/```</i>
    1. The last slash is important!
  2. Log in using the admin credentials you created when you ran ```manage.py syncdb```.
2. An 'admin' (typically the club leader or representative) is responsible for adding users to the site. To add a user:
  1. Select ```Users``` from the admin panel
  2. Select ```Add user```
  3. Fill in the ```Username```, ```Password```, and ```Password confirmation```
3. Editing a user's information is also up to the admin
  1. Select ```Users``` from the admin panel
  2. Select the user that is going to be edited
  3. The admin can change things such as:
    1. First Name
    2. Last Name
    3. Email Address
    4. If they are active or not
    5. If they are an admin
4. Adding Organization Name
  1. Select ```Orgnames``` from the admin panel
  2. Select ```Add orgname``` and fill in your organization name
    1. If one already exists, edit the name to fit your organization name
5. Adding Content to the About Page
  1. Select ```Orgabouts``` from the admin panel
  2. Select ```Add orgabout``` and fill it with information about your organization
    1. If one already exists, edit it with information about your organization

## Usage
1. Logging In
  1. Most of the website's functionality will require the user to be logged in. The following pages do not, however, and are accessible by anyone:
    1. About Us
    1. Calendar
2. Adding Posts
  1. Go to the 'Posts' tab
  2. Click 'Add Post'
  3. Fill in the title, subtitle, cover image URL, the content of the post, and a list of comma-separated tags
  4. Click 'Create Post'
3. Adding Calendar Events
  1. Go to the 'Calendar' tab
  2. Click 'Add Event'
  3. Fill in a name for your event
  4. Fill in start and end dates
  5. Click 'Create Event'
