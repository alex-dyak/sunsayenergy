<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "request".
 *
 * @property integer $id
 * @property string $name
 * @property string $type
 * @property string $phone
 * @property string $email
 * @property string $date
 */
class Request extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'request';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'type', 'phone', 'email', 'date'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Имя',
            'type' => 'Тип заявки',
            'phone' => 'Телефон',
            'email' => 'Email',
            'date' => 'Время',
        ];
    }

    public function sendBitrix($name, $phone, $email, $type, $utm_source, $utm_medium, $utm_campaign, $utm_content, $utm_term)
    {
        $user_id = 53;
        $user_key = "5379jaa1kany8byg";
        $bitrix_host = "sunsayenergy.bitrix24.ua";
        $api_url = "https://" . $bitrix_host . "/rest/" . $user_id . "/" . $user_key . "/";



        if (!empty($phone)) {
            $phone = str_replace([
                '+38',
                '(',
                ')',
                '+',
                '-',
                ], '', $phone);
        }

        $fields = [
            'fields' => [
                'TITLE' => $name.'('.$type.')',
                "NAME" => $name,
                'COMMENTS' => $type,
                'STATUS_ID' => 'NEW',
                'SOURCE_ID' => "WEB",
                'OPENED' => 'Y',
                'ASSIGNED_BY_ID' => '',
                'UTM_SOURCE' => $utm_source,
                'UTM_MEDIUM' => $utm_medium,
                'UTM_CAMPAIGN' => $utm_campaign,
                'UTM_CONTENT' => $utm_content,
                'UTM_TERM' => $utm_term,
                "PHONE" => [
                    [
                        "VALUE" => $phone,
                        "VALUE_TYPE" => "WORK"
                    ]
                ],
                "EMAIL" => [
                    [
                        "VALUE" => $email,
                        "VALUE_TYPE" => "WORK"
                    ]
                ],
                'params' => [
                    "REGISTER_SONET_EVENT" => "Y"
                ]
            ]
        ];

        $queryUrl = $api_url . 'crm.lead.add';
        $queryData = http_build_query($fields);

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POST => 1,
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $queryUrl,
            CURLOPT_POSTFIELDS => $queryData,));

        $result = @json_decode(curl_exec($curl), true);
        header('Content-Type: application/json');

        if (@$result['result']) {
         /*   echo json_encode([
                'status' => 'success',
            ]);*/
         return true;
        } else {
           /* echo json_encode([
                'code' => 2,
            ]);*/
           return false;
        }

        curl_close($curl);


        function cleaned($value = "")
        {
            $value = trim($value);
            $value = stripslashes($value);
            $value = strip_tags($value);
            $value = htmlspecialchars($value);
            return $value;
        }

    }

    public static function subscribeEsputnik($email, $type='', $first_name = '', $phone= '' )
    {
        $user = 'hostmaster@sunsayenergy.com';
        $password = 'Has3JQE3s1';
        $subscribe_contact_url = 'https://esputnik.com.ua/api/v1/contact/subscribe';
        $json_contact_value = new \stdClass();
        $contact = new \stdClass();

        $contact->firstName = $first_name;
        $contact->channels = array(array('type'=>'email', 'value' => $email),
            array('type'=>'sms', 'value' => $phone)
        );

        $contact->fields = array(array('id'=>104827, 'value' => $type));

        $json_contact_value->contact = $contact;
        $json_contact_value->formType = $type;
        $json_contact_value->groups = array('Subscribers');

        self::sendRequestEsputnik($subscribe_contact_url, $json_contact_value, $user, $password);
    }


    protected static function sendRequestEsputnik($url, $json_value, $user, $password)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($json_value));
        curl_setopt($ch, CURLOPT_HEADER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_USERPWD, $user.':'.$password);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        echo($output);
        curl_close($ch);
    }


}
