
INSERT INTO UserInCaffe ( Name, Phone, Created, DateOfBirth, IsDeleted, Login, Password, Status)
VALUES ('John Smith', '5551234', TO_DATE('2023-03-04', 'YYYY-MM-DD'), TO_DATE('1990-01-01', 'YYYY-MM-DD'), 0, 'user', '1', 1);

INSERT INTO UserInCaffe ( Name, Phone, Created, DateOfBirth, IsDeleted, Login, Password, Status)
VALUES ('Marina Shastovskaya', '3367892', TO_DATE('2023-03-22', 'YYYY-MM-DD'), TO_DATE('2003-02-22', 'YYYY-MM-DD'), 0, 'user', '1', 1);

INSERT INTO UserInCaffe (Name, Phone, Created, DateOfBirth, IsDeleted, Login, Password, Status)
VALUES ('Jane Lui', '5694295', TO_DATE('2023-06-25', 'YYYY-MM-DD'), TO_DATE('1999-12-03', 'YYYY-MM-DD'), 0, 'user', '1', 1);

INSERT INTO UserInCaffe ( Name, Phone, Created, DateOfBirth, IsDeleted, Login, Password, Status)
VALUES ('Ulia Grintsevich', '7760346', TO_DATE('2023-02-03', 'YYYY-MM-DD'), TO_DATE('2003-03-03', 'YYYY-MM-DD'), 0, 'user', '1', 1);

INSERT INTO UserInCaffe ( Name, Phone, Created, DateOfBirth, IsDeleted, Login, Password, Status)
VALUES ('Stiven Smith', '4678902', TO_DATE('2020-07-04', 'YYYY-MM-DD'), TO_DATE('1999-01-01', 'YYYY-MM-DD'), 0, 'user', '1', 1);

insert into StatusInCaffe (Status, name) values (1, 'user');
insert into StatusInCaffe (Status, name) values (0, 'admin');

-----

BEGIN
  FOR i IN 1..100000 LOOP
    INSERT INTO ItemsInOrder (IdOrder, IdItem, Count)
    VALUES (ROUND(DBMS_RANDOM.VALUE(6, 1000)), 
            ROUND(DBMS_RANDOM.VALUE(1, 85)), 
            ROUND(DBMS_RANDOM.VALUE(1, 20)));
  END LOOP;
END;

commit;

SELECT * FROM ItemsInOrder where count > 10 and IDITEM = 14;


select Idorder, iditem, count from ItemsInOrder where Idorder = 53 and IDITEM = 14;
create index Ind_Idoraders on ItemsInOrder (Idorder, iditem);
drop index Ind_Idoraders;
create index Ind_IdItem on ItemsInOrder (IDITEM);
drop index Ind_IdItem
create index Ind_Idoraderm on ItemsInOrder (IDORDER);
drop index Ind_Idoraders





-----

INSERT INTO OrderInCaffe (IdUser, Created, Discount, IsDeleted)
VALUES (1, TO_DATE('2022-01-01', 'YYYY-MM-DD'), 0.1, '0');

INSERT INTO OrderInCaffe (IdUser, Created, Discount, IsDeleted)
VALUES (ROUND(DBMS_RANDOM.VALUE(1, 5)), 
        TO_DATE('2022-05-01', 'YYYY-MM-DD') + DBMS_RANDOM.VALUE(0, 588), 
        ROUND(DBMS_RANDOM.VALUE(1, 40))/100, 
        '0');
BEGIN
  FOR i IN 1..1000 LOOP
    INSERT INTO OrderInCaffe (IdUser, Created, Discount, IsDeleted)
    VALUES (ROUND(DBMS_RANDOM.VALUE(1, 5)), 
            TO_DATE('2022-05-01', 'YYYY-MM-DD') + DBMS_RANDOM.VALUE(0, 588), 
            ROUND(DBMS_RANDOM.VALUE(1, 40))/100, 
            '0');
  END LOOP;
END;


insert into Item (NAME, COST, ISDELETED) values ('espresso', 10.53, 0);
insert into Item (NAME, COST, ISDELETED) values ('latte', 13.11, 0);
insert into Item (NAME, COST, ISDELETED) values ('cappuccino', 11.28, 1);
insert into Item (NAME, COST, ISDELETED) values ('americano', 8.16, 1);
insert into Item (NAME, COST, ISDELETED) values ('macchiato', 4.22, 0);
insert into Item (NAME, COST, ISDELETED) values ('mocha', 14.65, 0);
insert into Item (NAME, COST, ISDELETED) values ('chai tea latte', 6.35, 0);
insert into Item (NAME, COST, ISDELETED) values ('hot chocolate', 11.44, 0);
iinsert into Item (NAME, COST, ISDELETED) values ('iced coffee', 13.2, 1);
insert into Item (NAME, COST, ISDELETED) values ('iced tea', 10.38, 1);
insert into Item (NAME, COST, ISDELETED) values ('frappuccino', 17.79, 0);
insert into Item (NAME, COST, ISDELETED) values ('smoothie', 7.06, 0);
insert into Item (NAME, COST, ISDELETED) values ('bagel', 8.05, 0);
insert into Item (NAME, COST, ISDELETED) values ('croissant', 14.53, 1);
insert into Item (NAME, COST, ISDELETED) values ('muffin', 18.32, 0);
insert into Item (NAME, COST, ISDELETED) values ('scone', 19.65, 1);
insert into Item (NAME, COST, ISDELETED) values ('sandwich', 12.84, 1);
insert into Item (NAME, COST, ISDELETED) values ('panini', 11.45, 0);
insert into Item (NAME, COST, ISDELETED) values ('salad', 10.91, 1);
insert into Item (NAME, COST, ISDELETED) values ('soup', 4.74, 1);
insert into Item (NAME, COST, ISDELETED) values ('quiche', 15.14, 0);
insert into Item (NAME, COST, ISDELETED) values ('cake', 4.66, 1);
insert into Item (NAME, COST, ISDELETED) values ('cookie', 15.65, 1);
insert into Item (NAME, COST, ISDELETED) values ('brownie', 17.33, 0);
insert into Item (NAME, COST, ISDELETED) values ('pie', 3.55, 1);
insert into Item (NAME, COST, ISDELETED) values ('tart', 7.14, 0);
insert into Item (NAME, COST, ISDELETED) values ('ice cream', 10.1, 1);
insert into Item (NAME, COST, ISDELETED) values ('yogurt', 19.43, 1);
insert into Item (NAME, COST, ISDELETED) values ('fruit cup', 12.47, 1);
insert into Item (NAME, COST, ISDELETED) values ('granola', 12.49, 1);
insert into Item (NAME, COST, ISDELETED) values ('oatmeal', 9.82, 0);
insert into Item (NAME, COST, ISDELETED) values ('pancakes', 8.31, 0);
insert into Item (NAME, COST, ISDELETED) values ('waffles', 14.23, 1);
insert into Item (NAME, COST, ISDELETED) values ('french toast', 12.19, 0);
insert into Item (NAME, COST, ISDELETED) values ('eggs benedict', 13.03, 0);
insert into Item (NAME, COST, ISDELETED) values ('omelette', 10.39, 1);
insert into Item (NAME, COST, ISDELETED) values ('breakfast burrito', 1.07, 1);
insert into Item (NAME, COST, ISDELETED) values ('avocado toast', 0.79, 1);
insert into Item (NAME, COST, ISDELETED) values ('smashed potatoes', 8.29, 1);
insert into Item (NAME, COST, ISDELETED) values ('hash browns', 15.56, 1);
insert into Item (NAME, COST, ISDELETED) values ('bacon', 18.7, 0);
insert into Item (NAME, COST, ISDELETED) values ('sausage', 8.23, 1);
insert into Item (NAME, COST, ISDELETED) values ('ham', 19.16, 0);
insert into Item (NAME, COST, ISDELETED) values ('turkey', 7.33, 0);
insert into Item (NAME, COST, ISDELETED) values ('chicken', 14.57, 1);
insert into Item (NAME, COST, ISDELETED) values ('beef', 1.68, 1);
insert into Item (NAME, COST, ISDELETED) values ('tofu', 9.1, 0);
insert into Item (NAME, COST, ISDELETED) values ('vegetables', 2.92, 1);
insert into Item (NAME, COST, ISDELETED) values ('fruit', 18.66, 0);
insert into Item (NAME, COST, ISDELETED) values ('nuts', 10.04, 0);
insert into Item (NAME, COST, ISDELETED) values ('cheese', 1.22, 0);
insert into Item (NAME, COST, ISDELETED) values ('cream cheese', 10.75, 0);
insert into Item (NAME, COST, ISDELETED) values ('butter', 19.5, 0);
insert into Item (NAME, COST, ISDELETED) values ('jam', 8.74, 1);
insert into Item (NAME, COST, ISDELETED) values ('honey', 0.55, 1);
insert into Item (NAME, COST, ISDELETED) values ('syrup', 0.14, 1);
insert into Item (NAME, COST, ISDELETED) values ('whipped cream', 0.37, 0);
insert into Item (NAME, COST, ISDELETED) values ('caramel', 8.53, 1);
insert into Item (NAME, COST, ISDELETED) values ('chocolate sauce', 18.74, 1);
insert into Item (NAME, COST, ISDELETED) values ('vanilla syrup', 7.17, 1);
insert into Item (NAME, COST, ISDELETED) values ('hazelnut syrup', 18.94, 0);
insert into Item (NAME, COST, ISDELETED) values ('cinnamon', 9.75, 1);
insert into Item (NAME, COST, ISDELETED) values ('nutmeg', 15.23, 0);
insert into Item (NAME, COST, ISDELETED) values ('ginger', 0.74, 0);
insert into Item (NAME, COST, ISDELETED) values ('mint', 13.14, 1);
insert into Item (NAME, COST, ISDELETED) values ('lemon', 18.5, 0);
insert into Item (NAME, COST, ISDELETED) values ('orange', 10.79, 1);
insert into Item (NAME, COST, ISDELETED) values ('grapefruit', 13.8, 0);
insert into Item (NAME, COST, ISDELETED) values ('apple', 9.5, 0);
insert into Item (NAME, COST, ISDELETED) values ('pear', 14.97, 0);
insert into Item (NAME, COST, ISDELETED) values ('banana', 9.86, 0);
insert into Item (NAME, COST, ISDELETED) values ('strawberry', 18.5, 0);
insert into Item (NAME, COST, ISDELETED) values ('blueberry', 2.12, 0);
insert into Item (NAME, COST, ISDELETED) values ('raspberry', 8.03, 0);
insert into Item (NAME, COST, ISDELETED) values ('blackberry', 8.33, 0);
insert into Item (NAME, COST, ISDELETED) values ('pineapple', 0.19, 1);
insert into Item (NAME, COST, ISDELETED) values ('mango', 5.82, 1);
insert into Item (NAME, COST, ISDELETED) values ('peach', 1.08, 0);
insert into Item (NAME, COST, ISDELETED) values ('apricot', 7.2, 0);
insert into Item (NAME, COST, ISDELETED) values ('plum', 5.67, 1);
insert into Item (NAME, COST, ISDELETED) values ('kiwi', 2.03, 1);
insert into Item (NAME, COST, ISDELETED) values ('watermelon', 5.46, 1);
insert into Item (NAME, COST, ISDELETED) values ('cantaloupe', 12.69, 0);
insert into Item (NAME, COST, ISDELETED) values ('honeydew', 4.36, 1);
insert into Item (NAME, COST, ISDELETED) values ('grapes', 19.1, 1);
insert into Item (NAME, COST, ISDELETED) values ('cherries', 16.69, 0);

commit;

select * from Item;
select * from UserInCaffe;
select * from StatusInCaffe;
select * from ItemsInOrder;
select * from OrderInCaffe;



