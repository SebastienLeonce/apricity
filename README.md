#Apricity

You will an extract of US census in us-census.db.gz
This file is a SQLite base that contains a table "census_learn_sql” with demographic data.

The goal of this exercice is to create a small web application that visualizes database data.

The application should allow to select a column (amongst demographic data), then display, for each different value in this column, the number of lines with this value, and "age" value average.
Values must be sorted by decreasing order. One can display only the 100 first values.

The page could look like:
| -------------
| variable | education v |
| -------------
| ---------------------------------------------
| | value | count | average age |
| | less than 1st grade | 1234 | 45,5 |
| | PhD | 123 | 34,4 |
| ---------------------------------------------
|

For simplicity's sake, all columns (except "age") are considered as "string".

The application must be a SPA (Single-Page Application), i.e. user must be able to change the variable value without reloading the page.

Extras:

-   if there are more than 100 different values, indicate the number of non-displayed values.
-   limit the number of lines and indicate the number of non-displayed lines (i.e. lines corresponding to non-displayed values)
-   extensibility: allow for a simple way to change the database and variables

Select tech stack adapted for exercice (backend and frontend).

Share code on GitHub ou Bitbucket.
Note: on Bitbucket, private repositories are free.
Otherwise by email

Ideally, share the application URL :)

## How to use the application

-   `yarn install`
-   `yarn dev`
-   open `http://localhost:3000`

# Todo

Par manque de temps, il y a des fonctionnalités que je n'ai pas eu le temps de faire.

-   CI/CD
-   Deployement
-   Des problèmes d'architecture
