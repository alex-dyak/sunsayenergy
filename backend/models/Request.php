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
                '+',
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

    public function sendPipedrive($name, $phone, $email, $type, $utm_source, $utm_medium, $utm_campaign, $utm_content, $utm_term)
    {
        // Pipedrive API token
        $api_token = 'f18416732445a918da5b9962e7ed542c63daed0d';
        // Pipedrive company domain
        $company_domain = 'sunsayenergy';

        $url = 'https://'.$company_domain . '.pipedrive.com/api/v1/persons?api_token=' . $api_token;

        if (!empty($phone)) {
            $phone = str_replace([
                                     '+',
                                     '(',
                                     ')',
                                     '+',
                                     '-',
                                 ], '', $phone);
        }

        // Data of the new user
        $data = array(
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            '4a31eb274ac791ccd212ef9398c8bbcfc00280e1' => 102,
//            'b4bc168aeb41c153327694ef611c8f9505692415' => '',
            '7204b1ce20a9be08525167a4998eb6f944e293e3' => $utm_campaign,
            '385ca0f4322888157d8a1fe7898ef2373c30b29a' => $utm_content,
            '02a0ea9d919fa498e78d38d74866e123e213e870' => $utm_medium,
            '9b2076c97a9c1394325888bfb6f0a4817af9661a' => $utm_source,
            'ccc8fdaa8f88313a653822590618089939057a34' => $utm_term,
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        $output = curl_exec($ch);
        curl_close($ch);

        $result = json_decode($output, true);

        if (empty($result['data'])) {
            return false;
        }

        // Check if an Person ID came back, if did print it out
        if (!empty($result['data']['id'])) {
            // Data of the new Lead
            $data_lead = array(
                'title' => $name,
                'person_id' => $result['data']['id'],
                '36cac44123dba1b55f87719c4883d687ca1e0871' => 108,
                '0d0c7ad107065f03504695cce7bfa73f7296b933' => $type,
                'f2eaf58053a24bccfa41d8dbad863bd46ecd45bd' => $utm_campaign,
                '912ab721e97b1d18963c6badc0dc3ce30c5fa824' => $utm_content,
                'f2ff3c4ef688fd9fe7016c856329e7971ea68656' => $utm_medium,
                'a2fcaa034e1ee41d17e0a0ef3452eb3563ecc297' => $utm_source,
                'babeb20381a0f4ed55320ea0372b8c58409d95e8' => $utm_term,
            );

            $url = 'https://'.$company_domain . '.pipedrive.com/api/v1/leads?api_token=' . $api_token;
            $data_json = json_encode($data_lead);
            $headers = array(
                "Content-Type: application/json",
                "Accept: application/json",
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data_json);

            $output = curl_exec($ch);
            curl_close($ch);

            $result_lead = json_decode($output, true);
//            echo '<pre>';
//            print_r($result_lead);
//            echo '<pre>';die;
            if (empty($result_lead['data'])) {
                return false;
            }

            if (!empty($result_lead['data']['id'])) {
                return true;
            }
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
