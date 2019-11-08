Yii 2 advanced (AdminLTE, RBACK)
===============================  
```  
 1. composer self-update
 2. composer install
 3. php init
 4. Прописываем параметры подключения к БД в \common\config\main.php
 5. yii migrate
```  
rbac  
```  
php yii migrate --migrationPath=@yii/rbac/migrations/  
```  
How to use  
```  
Yii::$app->user->can('nameOfPermission')  
```