# Student_Org_Site_Backend

This README outlines the details of the production environment of [Student_Org_Site] (https://github.com/bhealy/Student-Org-Site).
This application is intended for student organizations to quickly and easily create a website.

## Prerequisites

* [Git](http://git-scm.com/)
* [Python] (https://www.python.org/)
* [Apache and Django] (http://secwebdev.mlhale.com/)
* A web-facing server to host the application on

## Installation

1. ```cd /var/www/```
  1. if the directory doesn't exist, create it using ```mkdir /var/www```
2. ```git clone https://github.com/clenk/Student_Org_Site_Backend.git```
3. Configure the localsettings with how Dr. Hale describes in his [Apache and Django configuration guide] (http://secwebdev.mlhale.com/)
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

## Integrating With Your Club
1. An 'admin' (typically the club leader or representative) is responsible for adding users to the site
  1. To add a user, go to <i>```clubApplicationURL/admin/```</i>
    1. The last slash is important!
  2. Log in using the credentials that were used when generating the admin
  3. Select ```Users```
  4. Select ```Add user```
  5. Fill in the ```Username```, ```Password```, and ```Password confirmation```
2. Editing a user's information is also up to the admin
  1. To add a user, go to <i>```clubApplicationURL/admin/```</i>
    1. The last slash is important!
  2. Log in using the credentials that were used when generating the admin
  3. Select the user that is going to be edited
  4. Can change things such as:
    1. First Name
    2. Last Name
    3. Email Address
    4. If they are active or not
    5. If they are an admin
    6. etc.
3. Adding Posts
  1. Anyone that is logged in can create a post by navigating to the 'Posts' tab and then selecting 'Add Post'
4. Adding Calendar Events
  1. Anyone that is logged in can create a calendar event by navigating to the 'Calendar' tab and then selecting 'Add Event'
