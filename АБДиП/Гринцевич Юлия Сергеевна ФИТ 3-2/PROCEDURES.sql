select * from Item;
select * from UserInCaffe;
select * from StatusInCaffe;
select * from ItemsInOrder;
select * from OrderInCaffe;

--COMMIT

-- ??? ?????? ?? ???????????? ??????
create or replace procedure GetOrderByPeriod (startdate date, enddate date)
as
cursor orders_cur is select * from OrderInCaffe where CREATED between startdate and enddate order by CREATED;
orderid OrderInCaffe.IDORDER%TYPE;
userid OrderInCaffe.IDUSER%TYPE;
crdt OrderInCaffe.CREATED%TYPE;
disc OrderInCaffe.DISCOUNT%TYPE;
isdel OrderInCaffe.ISDELETED%TYPE;
begin
  open orders_cur;
  loop
    fetch orders_cur into orderid, userid, crdt, disc, isdel;
    dbms_output.put_line(orderid || ' ' || userid || ' ' || crdt || ' ' || disc || ' ' || isdel);
    exit when orders_cur%NOTFOUND;
  end loop;
  close orders_cur;
  
  exception
    when others then dbms_output.put_line('?????? : ' || sqlerrm);
end;

begin
GetOrderByPeriod(TO_DATE('2022-06-01', 'YYYY-MM-DD'), TO_DATE('2022-12-01', 'YYYY-MM-DD'));
end;

-- ??????? ? ??????? ?? ???????????? ??????
create or replace function GetSumPrice(startdate date, enddate date) return number
as
  summa number;
begin
  select SUM(COST*COUNT) into summa from Item 
  inner join ItemsInOrder
  on Item.IDITEM = ItemsInOrder.IDITEM
  inner join OrderInCaffe on OrderInCaffe.IDORDER = ItemsInOrder.IDORDER
  where OrderInCaffe.CREATED between startdate and enddate;
  
  return summa;
end;

declare
  totalsum number;
begin
  totalsum := GetSumPrice(TO_DATE('2022-08-01', 'YYYY-MM-DD'), TO_DATE('2022-12-01', 'YYYY-MM-DD'));
  dbms_output.put_line('??????? ?? ??????: ' || to_char(totalsum));
end;

-- ???????? ??????
create or replace procedure CreateOrder (userid OrderInCaffe.IDUSER%TYPE,
dtcreate OrderInCaffe.CREATED%TYPE,
disc OrderInCaffe.DISCOUNT%TYPE,
isdel OrderInCaffe.ISDELETED%TYPE,
itemid ItemsInOrder.IDITEM%TYPE,
qtty ItemsInOrder.COUNT%TYPE)
as 
orderid number;
begin
  insert into OrderInCaffe (IDUSER, CREATED, DISCOUNT, ISDELETED)
  values (userid, dtcreate, disc, isdel)
  returning IDORDER into orderid;
  
  insert into ItemsInOrder (IDORDER, IDITEM, COUNT)
  values (orderid, itemid, qtty);
  
  dbms_output.put_line('???????? ?????');
  
  exception
    when others then dbms_output.put_line('?????? : ' || sqlerrm);
  
end;

begin
  CreateOrder(1, TO_DATE('2023-05-12', 'YYYY-MM-DD'), 0.2, 0, 1, 10);
end;

commit;


-------------------------------------------------------------
-- ???????? ??????
create or replace procedure DeleteOrder(idtodelete OrderInCaffe.IDORDER%TYPE)
as
begin
  update OrderInCaffe set ISDELETED = 1 where IDORDER = idtodelete;
  
  dbms_output.put_line('?????? ?????? ??????? ?? ??????');
  
  exception
    when others then dbms_output.put_line('?????? : ' || sqlerrm);
end;

begin
  DeleteOrder(1008);
end;

commit;




----------------------------------------
-- ???????? ?????
create or replace procedure DeleteItem(itemtodelete Item.IDITEM%TYPE)
as 
begin
  update Item set ISDELETED = 1 where IDITEM = itemtodelete;
  
  dbms_output.put_line('?????? ????? ??????? ?? ?????? ?? ????');
  
  exception
    when others then dbms_output.put_line('?????? : ' || sqlerrm);
end;

begin
  DeleteItem(1);
end;

-- ?????????? ???????? ?????
create or replace procedure UpdateItemName(itemtoupdate Item.IDITEM%TYPE,
newname Item.NAME%TYPE)
as
oldname Item.NAME%TYPE;
begin
  select NAME into oldname from Item where IDITEM = itemtoupdate;
  update Item set NAME = newname where IDITEM = itemtoupdate;
  
  dbms_output.put_line('??? ????? ????? ???????? ? ' || oldname || ' ?? ' || newname);

  exception
    when others then dbms_output.put_line('?????? : ' || sqlerrm);
end;

begin
  UpdateItemName(1, 'espresso');
end;

commit;

-- ?????????? ????????? ?????
create or replace procedure UpdateItemCost(itemtoupdate Item.IDITEM%TYPE,
newcost Item.COST%TYPE)
as
oldcost Item.COST%TYPE;
begin
  select COST into oldcost from Item where IDITEM = itemtoupdate;
  update Item set COST = newcost where IDITEM = itemtoupdate;
  
  dbms_output.put_line('????????? ????? ???????? ? ' || oldcost || ' ?? ' || newcost);
  
  exception
    when others then dbms_output.put_line('?????? : ' || sqlerrm);
end;

begin
  UpdateItemCost(1, 10.53);
end;

commit;
