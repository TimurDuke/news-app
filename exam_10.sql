create database if not exists news;

use news;

create table news
(
    id          int auto_increment
        primary key,
    title       varchar(255) not null,
    description text         not null,
    image       varchar(50)  null,
    date        date         not null
);

create table comments
(
    id      int auto_increment
        primary key,
    news_id int          not null,
    author  varchar(255) null,
    comment text         not null,
    constraint comments_news_null_fk
        foreign key (news_id) references news (id)
            on update cascade on delete cascade
);

insert into news (title, description, image, date)
values ('Политика', 'Мигранты, варвары, крах ценностей. Washington Times рассуждает о распаде США', null, '1998-03-12'),
       ('Животные', 'Грузинский пожарный спас суслика в Боржоми', null, '2003.04.29');

insert into comments (news_id, author, comment)
values ('1', 'Тимур', 'Ожидаемо('),
       ('2', 'Мария', 'Какая прелесть!)');
