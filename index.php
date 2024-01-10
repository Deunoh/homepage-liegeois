<?php require './tpl/data.php'; 
    require './tpl/header.tpl.php';
    include './tpl/clock.php';
?>

        <section id="code">
            <ul>
            <?php foreach($webCode as $key => $webCodeSite): ?>
                <li><a href="<?= $webCodeSite["URL"]; ?>" target="_blank"><img class="logo" src="<?= $webCodeSite["logo"]; ?>" alt="logo-website"></a> </li>
            <?php endforeach; ?> 
                <li> <a id="right" href="#"><img class="arrows" src="logo/arrow-right.png"></a> </li>
            </ul>
        </section>
        
    <!-- PAGE 2 -->
   
        <section id="tools">
            <ul>
                <?php foreach($webTools as $key => $webToolSite): ?>
                    <li><a href="<?= $webToolSite["URL"]; ?>" target="_blank"><img class="logo second" src="<?= $webToolSite["logo"]; ?>" alt="logo-website"></a> </li>
                <?php endforeach; ?> 

                    <li> <a id="left" href="#"><img class="arrows" src="logo/arrow-left.png"></a> </li>
            </ul>
        </section>
        <section id="jeux">
            <ul>
                <?php foreach($webGames as $key => $webgameSite): ?>
                    <li><a href="<?= $webgameSite["URL"]; ?>" target="_blank"><img class="logo second" src="<?= $webgameSite["logo"]; ?>" alt="logo-website"></a> </li>
                <?php endforeach; ?> 
           
            </ul>
        </section>
       <section id="TP">
            <ul>
                <?php foreach($webTPDWWM as $key => $webTPSite): ?>
                    <li><a href="<?= $webTPSite["URL"]; ?>" target="_blank"><img class="logo second" src="<?= $webTPSite["logo"]; ?>" alt="logo-website"></a> </li>
                <?php endforeach; ?> 
           
            </ul>
              
       </section> 
        
<?php include './tpl/footer.tpl.php' ?>