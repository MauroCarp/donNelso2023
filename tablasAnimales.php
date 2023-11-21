<?php

require_once "controladores/animales.controlador.php";

require_once "modelos/animales.modelo.php";

require_once('modelos/conexion.php');

$item = NULL;
$valor = NULL;
$item2 = 'tipo';

$valor2 = 'ovino';

$ovinos = ctrMostrarAnimal($item,$valor,$item2,$valor2);

$valor2 = 'cordero';

$corderos = ctrMostrarAnimal($item,$valor,$item2,$valor2);

$valor2 = 'chivo';

$chivos = ctrMostrarAnimal($item,$valor,$item2,$valor2);

$valor2 = 'cerdo';

$cerdos = ctrMostrarAnimal($item,$valor,$item2,$valor2);

$valor2 = 'pollo';

$pollos = ctrMostrarAnimal($item,$valor,$item2,$valor2);

?>
<h1>Ovinos</h1>
<table>
    <thead>
        <tr>
            <td>Caravana</td>
        </tr>
    </thead>
    <tbody>
        <?php
            
            foreach ($ovinos as $key => $value) {
                echo "<tr>
                    <td>".$value['caravana']."</td>
                </tr>";
            }
        
        ?>
    </tbody>
</table>
<h1>Corderos</h1>
<table>
    <thead>
        <tr>
            <td>Caravana</td>
        </tr>
    </thead>
    <tbody>
        <?php
            
            foreach ($corderos as $key => $value) {
                echo "<tr>
                    <td>".$value['caravana']."</td>
                </tr>";
            }
        
        ?>
    </tbody>
</table>
<h1>Chivos</h1>
<table>
    <thead>
        <tr>
            <td>Caravana</td>
        </tr>
    </thead>
    <tbody>
        <?php
            
            foreach ($chivos as $key => $value) {
                echo "<tr>
                    <td>".$value['caravana']."</td>
                </tr>";
            }
        
        ?>
    </tbody>
</table>
<h1>Cerdos</h1>
<table>
    <thead>
        <tr>
            <td>Caravana</td>
        </tr>
    </thead>
    <tbody>
        <?php
            
            foreach ($cerdos as $key => $value) {
                echo "<tr>
                    <td>".$value['caravana']."</td>
                </tr>";
            }
        
        ?>
    </tbody>
</table>
<h1>Pollos</h1>
<table>
    <thead>
        <tr>
            <td>Caravana</td>
        </tr>
    </thead>
    <tbody>
        <?php
            
            foreach ($pollos as $key => $value) {
                echo "<tr>
                    <td>".$value['caravana']."</td>
                </tr>";
            }
        
        ?>
    </tbody>
</table>