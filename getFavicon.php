<?php

// Votre lien
$lien = "https://drive.google.com/drive/u/1/my-drive";

// Obtenez les composants de l'URL
$components = parse_url($lien);


// Vérifiez si le lien a le composant "host"
if (isset($components['host'])) {
    // Divisez le domaine en parties séparées par des points
    $domainParts = explode('.', $components['host']);

    // Reconstituez le domaine jusqu'au .com
    $domain = $domainParts[count($domainParts) - 2] . '.' . $domainParts[count($domainParts) - 1];

    // Ajoutez /favicon.ico à la fin
    $nouveauLien = $domain . '/favicon.ico';

    // Affichez le résultat
    echo "Domaine : $domain\n";
    echo "Nouveau lien : $nouveauLien\n";


} else {
    echo "Lien invalide\n";
}

echo "Celui là plus simple : " . $components['host'] . "/favicon.ico"; //celui là plus simple et realisable 






function getFavicon($tab){
    $favicons = array(); // Un tableau pour stocker les favicons de chaque URL

    foreach($tab as $url){
        $link = $url['URL'];
        
        // Obtenez les composants de l'URL
        $components = parse_url($link);

        // Vérifiez si le lien a le composant "host"
        if (isset($components['host'])) {
            // Reconstituez le domaine jusqu'au .com
            $domainParts = explode('.', $components['host']);
            $domain = $domainParts[count($domainParts) - 2] . '.' . $domainParts[count($domainParts) - 1];

            // Ajoutez /favicon.ico à la fin
            $newURL = $domain . "/favicon.ico";

            // Stockez le nouveau lien dans le tableau des favicons
            $favicons[] = $newURL;
        }
    }

    return $favicons;
}


$favicons = getFavicon($webGames);

// Affichez les résultats
foreach ($favicons as $favicon) {
    echo $favicon;
}
?>
