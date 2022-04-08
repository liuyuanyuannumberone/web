-- ----------------------------------------------------------MySQL�Ż�------------------------------------------------------------------

-- Ŀǰͨ�� �Ż�����  �Լ�   ��дsql   ��������ܡ�

-- ����ѯ��־ 
-- ִ�мƻ�
-- �����벢������

/*
�������������⣨�򿪶���½���ѯ���ڽ��в���������߲�����ʱΪ��������ݿ�Ĵ���Ч�ʡ�
�����������Ϊ�˽���������������⡣

1.��������δ�ύ�����ݣ���һ�������ȡ������һ������û��commit�����ݡ�����Ϊ����һ��������ܲ���rollback�����µ�һ�������ȡ����
2.�����ظ�������ȡ���ݱ���ĶԱȣ�ֵ��һ���ˣ���һ���������ζ�ȡ��ͬһ���ݲ�һ�£�����һ������commit�󣬵�һ�������ֶ�ȡ��ͬ�������ݣ����ǲ�һ����
3.�ö�����ȡ����������ĶԱȣ�������һ���ˣ����������һ�£������ظ��������������


innodb���뼶�� 
˳�����SERIALIZABLE(serializ able)              ��NNN,��������ߣ�����������ֻ���������ִ����ϣ���һ������Ż�ִ�У�
���ظ�����REPEATABLE READ(repeatable read)       ��Ĭ�ϸ��뼶��NNN��
�����ύ��READ COMMITTED(read committed)         ��NYY��
��δ�ύ��READ UNCOMMITTED)(read uncommitted)     (YYY,�����������������)



���ø��뼶��
SET  SESSION  TRANSACTION ISOLATION LEVEL    SERIALIZEABLE;          ## PERSIST/GLOBAL/SESSION (������Ա����SESSION ,ֻ�ڵ�ǰ������Ч)

*/

SHOW  VARIABLES LIKE '%iso%'; #�鿴���뼶��
SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;  #�޸�����ĸ��뼶��




--ʾ��
-- �����ִ��(SERIALIZEABLE)---
BEGIN;
SELECT course_id,title,score
FROM imc_course
WHERE score>9.6

-- �����ִ��(REPEATABLE-READ) 
BEGIN;
UPDATE imc_course 
SET score=9.8
WHERE course_id=34

/*
������

*/



