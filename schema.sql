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


insert into employee (first_name, last_name,)
values ("Alex", "Smith",);

insert into employee (first_name, last_name,)
values ("Mike", "Chan");

insert into employee (first_name, last_name)
values ("Wil", "Fox",);

insert into employee (first_name, last_name)
values ("Sarah", "Hernandez");

insert into employee (first_name, last_name)
values ("John", "Doe",);



insert into roles(title, department,salary)
values("sales Lead", "Sales", "35000");

insert into roles(title, department,salary)
values("sales person", "Sales", "330000");

insert into roles(title, department,salary)
values("Account Manager", "Finance", "40000");

insert into roles(title, department,salary)
values("Lawyer", "Legal", "77000");

insert into roles(title, department,salary)
values("Lead Engineer", "Engineering", "80000");

select * from employee;
select * from roles;

select first_name, last_name
from employee
inner join employee on roles.id = employee.role_id;


 

