<?php
    function add_Tolist($data, $path){
        if($jsonData = json_encode($data,JSON_PRETTY_PRINT)){
            return file_put_contents($path,$jsonData);
        }
        return false;
    }
    function read_JSON($path){
        if($data = file_get_contents($path)){
            //Transformarlo a un arreglo y luego devolverlo
            return json_decode($data,true);
        }
    
        return false;
    }
    function deleteSection_JSON($data, $path, $section){
            if($jsonData = json_encode($data,JSON_PRETTY_PRINT)){
                unset($data[$section]);
                return file_put_contents($path,json_encode($data));
            } 
        return false;
    }
