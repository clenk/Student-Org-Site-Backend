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
  1. change ```IS_PROD = False``` to ```IS_PROD = True```
12. ```python vim ../localsettings```
  1. change ```IS_PROD = False``` to ```IS_PROD = True```
13. ```sudo apachectl restart```
14. Now you should be good to go!
