drop database if exists employeeTrackerDB;

create database employeeTrackerDB;

use employeeTrackerDB;


create table department (
    id int not null auto_increment,
    department_name varchar(30) not null,
    primary key (id)
);

create table roles (
    id int not null auto_increment,
    title varchar(30) not null,
    salary DECIMAL(10,4) not null,
    department_id int not null,
    primary key(id)
);

create table employee (
    id int not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int null,
    primary key(id)
);

 

