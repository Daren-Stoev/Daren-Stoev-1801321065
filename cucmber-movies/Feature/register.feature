Feature: ����������� �� ����������

  Scenario Outline: ����������� �� ����������
    Given ������������ ������ ������ �� �����������
    When ������ ������������� ���"<username>"
    And ������ ������"<password>"
    And ������ �������� ������ "<password2>"
    And ������ ���������� ����"<email>"
    And ������� ����� ������ �� �����������
    Then ����� ��������� "<expectedMessage>"

    Examples: 
      | username|password| password2|email|expectedMessage|
      | user1 | password | password |test@test.com|������� �� �������������|
      | user2 | password | password |test@test.com|��������������� ��� � �����|
      | | password | password |test@test.com|�������� ������������� ���|
      | user1 | password | password ||�������� ���������� ����|
      | user1 | password | password123 |test@test.com|�������� ������� ������|
      | user1 | password |  |test@test.com|���������� ��������|