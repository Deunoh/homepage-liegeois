<?php require './tpl/data.php'; 
    require './tpl/header.tpl.php';
    
?>
<main>  
    <div class="filler"></div>
        <svg width="200" height="200">
            <g>
                <circle id="shadow" style="fill:rgba(0,0,0,0.1)" cx="97" cy="100" r="87" filter="url(#innerShadow)"></circle>
                <circle id="circle" style="stroke: #FFF; stroke-width: 12px; fill:#12826f" cx="100" cy="100" r="80"></circle>
            </g>
            <g>
                <line x1="100" y1="100" x2="100" y2="55" transform="rotate(80 100 100)" style="stroke-width: 3px; stroke: #fffbf9;" id="hourhand">
                    <animatetransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="43200s"
                                      repeatCount="indefinite"/>
                </line>
                <line x1="100" y1="100" x2="100" y2="40" style="stroke-width: 4px; stroke: #fdfdfd;" id="minutehand">
                    <animatetransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="3600s"
                                      repeatCount="indefinite"/>
                </line>
                <line x1="100" y1="100" x2="100" y2="30" style="stroke-width: 2px; stroke: #C1EFED;" id="secondhand">
                    <animatetransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="60s"
                                      repeatCount="indefinite"/>
                </line>
            </g>
            <circle id="center" style="fill:#128A86; stroke: #C1EFED; stroke-width: 2px;" cx="100" cy="100" r="3"></circle>
        </svg>
    <section id="code">
                <ul>
                <?php foreach($webCode as $key => $webCodeSite): ?>
                    <li class="links"><a href="<?= $webCodeSite["URL"]; ?>" title="<?= $webCodeSite["URL"]; ?>" target="_blank"><img class="logo" src="<?= $webCodeSite["logo"]; ?>" alt="logo-website"></a> </li>
                <?php endforeach; ?> 
                    <li> <a id="right" href="#"><img class="arrows" src="logo/arrow-right.png"></a> </li>
                </ul>
            </section>
            
        <!-- PAGE 2 -->
    
            <section id="tools">
                <ul>
                    <?php foreach($webTools as $key => $webToolSite): ?>
                        <li class="links"><a href="<?= $webToolSite["URL"]; ?>" title="<?= $webToolSite["URL"]; ?>" target="_blank"><img class="logo second" src="<?= $webToolSite["logo"]; ?>" alt="logo-website"></a> </li>
                    <?php endforeach; ?> 

                        <li> <a id="left" href="#"><img class="arrows" src="logo/arrow-left.png"></a> </li>
                </ul>
            </section>
            <section id="jeux">
                <ul>
                    <?php foreach($webGames as $key => $webgameSite): ?>
                        <li class="links"><a href="<?= $webgameSite["URL"]; ?>" title="<?= $webgameSite["URL"]; ?>" target="_blank"><img class="logo second" src="<?= $webgameSite["logo"]; ?>" alt="logo-website"></a> </li>
                    <?php endforeach; ?> 
                    <?php foreach($webTPDWWM as $key => $webTPSite): ?>
                        <li class="links"><a href="<?= $webTPSite["URL"]; ?>" title="<?= $webTPSite["URL"]; ?>" target="_blank"><img class="logo second" src="<?= $webTPSite["logo"]; ?>" alt="logo-website"></a> </li>
                    <?php endforeach; ?> 
            
                </ul>
            </section>
            
   
</main>
<?php include './tpl/footer.tpl.php' ?>