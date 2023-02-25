
<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$request = json_decode(file_get_contents("php://input"));
$from_email = "no-reply@c1701462.ferozo.com";

$from_name = $request->nombre;
$cellPhone = $request->telefono;
$reasonInquiry = $request->motivoConsulta;
$message = $request->mensaje;
$correo = $request->correo;

$to_email = "agnenicarrazcoabogados@gmail.com";

$email_subject = "Nueva Consulta";

$email_body .= "<html><body>
  			   <p><strong>Name: </strong>$from_name</p>
               <p><strong>Email: </strong>$correo</p>
               <p><strong>Telefono: </strong>$cellPhone</p>
               <p><strong>Motivo Consulta: </strong>$reasonInquiry</p>
			   <p><strong>Mensaje: </strong>$message</p>
			   </body></html>";

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From: Consulta $from_name <$from_email>\n";
$headers .= "Reply-To: $correo";

mail($to_email,$email_subject,$email_body,$headers);

$response_array['status'] = 'success';
$response_array['from'] = $from_email;

echo json_encode($response_array);
echo json_encode($from_email);
header($response_array);
return $from_email;

?> 