drop table if exists property;

create table property (
    id serial primary key,
    name varchar,
    address varchar,
    city varchar,
    state varchar,
    zip varchar,
    img text,
    mortgage decimal,
    rent decimal
);

insert into property (
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
    ) values 
    ('nates house', '123 street', 'SLC', 'UT', '84121', 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/derelict-house.png', 300000.00, 1200.00),
    ('joshs house', '456 road', 'philly', 'PA', '34567', 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/derelict-house.png', 400000.00, 2200.00),
    ('james house', '789 court', 'philly', 'PA', '98457', 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/derelict-house.png', 500000.00, 1800.00)
    ;

select * from property;