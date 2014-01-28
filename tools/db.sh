#!/bin/bash


read -d '' HELP <<EOF
  ./db.sh -r
  -r             - restore
  -b             - backup

EOF


  if [ "$1" == "" ]
   then
    echo "$HELP";
   exit;
  fi

  SCRIPT_DIR=$(dirname $(readlink -f $BASH_SOURCE))

  DB_NAME="uc_simple_blog"
  FILE_NAME="$SCRIPT_DIR/../install/$DB_NAME.sql"
  DB_USER="root"
  DB_PASS="1111"


  if [ "$1" == "-b" ]
  then
    echo "backup ";
    mysqldump -u $DB_USER -p$DB_PASS $DB_NAME > $FILE_NAME --add-drop-table --comments=false ;

    sed ':a;N;$!ba;s/\n/THISISUNIQUESTRING/g' -i $FILE_NAME;
    sed -e 's/;THISISUNIQUESTRING/;\n/g' -i $FILE_NAME;
    sed -e 's/THISISUNIQUESTRING//g' -i $FILE_NAME;

  elif [ "$1" == "-r" ]
  then
    echo "restore"
    mysql -u $DB_USER -p$DB_PASS -e "CREATE DATABASE IF NOT EXISTS $DB_NAME CHARACTER SET utf8 COLLATE utf8_general_ci;"
    mysql -u $DB_USER -p$DB_PASS $DB_NAME < $FILE_NAME;
  else
    echo "$HELP"
  fi
