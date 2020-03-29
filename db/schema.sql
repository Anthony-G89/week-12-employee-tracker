drop database if exists employeeTrackerDB;

create database employeeTrackerDB;

use employeeTrackerDB;


create table departments (
    id int not null auto_increment,
    name varchar(30) not null,
    primary key (id)
);

create table roles (
    id int not null auto_increment,
    title varchar(30) not null,
    salary DECIMAL(10,4) not null,
    department_id int not null,
    primary key(id)
);

create table employees (
    id int not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int null,
    primary key(id)
);

insert into departments (name)
values("Sales");

insert into departments (name)
values("Marketing");

insert into roles(title, department_id,salary)
values("sales Lead", 1, "35000");

insert into roles(title, department_id,salary)
values("sales person", 1, "330000");

insert into roles(title, department_id,salary)
values("Account Manager", 2, "40000");


insert into employees (first_name, last_name, role_id, manager_id)
values ("Alex", "Smith", 1, null );

insert into employees (first_name, last_name, role_id, manager_id)
values ("Mike", "Chan", 1, 1);

insert into employees (first_name, last_name, role_id, manager_id)
values ("Wil", "Fox", 2, null);

insert into employees (first_name, last_name, role_id, manager_id)
values ("Sarah", "Hernandez", 2, 3);

insert into employees (first_name, last_name, role_id, manager_id)
values ("John", "Doe", 3, null);



select * from employee;
select * from roles;
select * from departments;

select first_name, last_name
from employee
inner join employee on roles.id = employee.role_id;


 

