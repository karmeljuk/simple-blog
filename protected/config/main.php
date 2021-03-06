<?php

  return array(
    'params' => array(
      'bundles' => array(
        '\Ub\Simpleblog\Bundle',
        '\Ub\Users\Bundle',
        '\Ub\Site\Bundle',
      ),
      'basePath' => dirname(__FILE__) . '/../..',
      'filesPath' => '/files',
      'errorHandler' => 'ub/site/error',
    ),

    'components' => array(
      'db' => array(
        'dsn' => 'mysql:host=localhost;dbname=uc_simple_blog',
        'username' => 'root',
        'password' => '1111',
        'tablePrefix' => 'uc_',
      ),
      'url' => array(
        'rules' => array(
          '/admin-panel/' => 'ub/admin/index',
          '/admin-panel/login.html' => 'ub/users/login',
          '/admin-panel/<controller:.*>/<action:[^/]+>' => '<controller>/admin/<action>',
          '/rss.xml' => 'ub/simpleblog/posts/rss',
          '/' => 'ub/simpleblog/posts/mainpage',
          '/<catsef>-c<catpk>/<postsef>-p<postpk:\d+>.html' => 'ub/simpleblog/posts/view',
          '/<catsef>-c<catpk:\d+>/' => 'ub/simpleblog/posts/category',
          '/<sef>.html' => 'ub/site/pages/view',
          '/<controller:.*>/<action:[^/]+>' => '<controller>/<action>',
        ),
        'baseUrl' => '/test/simple-blog/'
      ),
      'theme' => array(
        'themeName' => 'azmind',
        'layout' => 'main',
        'basePath' => dirname(__FILE__) . '/../../themes',
        'baseUrl' => '/themes',
      ),
      'userIdentity' => array(
        'class' => '\Ub\Users\Identity',
        'directAccess' => true,
        'loginRoute' => 'ub/users/login',
        'logoutRoute' => 'ub/users/logout',
        'successLoginRoute' => 'ub/admin/index',
        'successLogoutRoute' => '/',
      ),
    )
  );
