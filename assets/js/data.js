let redWhiteAndBlue_xml = '<!-- edit: 8/21 - N - first pass -->
<!-- edit: 8/24 - K - updated trainers and pokemon -->
<!-- edit: 8/27 - N - copy updates, updated attack names, changed some damage values and PP -->
<!-- edit: 9/15 - K - updated animations, map sequences, battle scripts, and various other additions - v7 -->
<!-- edit: 9/16 - N - updated names for pikachu\'s attacks, lots of minor copy changes for doc 1.4, some PP and attack data updates -->
<!-- edit: 9/18 - K - fixed ronald mcdonald 1 hit KO bug -->
<!-- edit: 9/18 - N - tuned paralysis odds, PP and damage for a few attacks. made battle copy past tense, updated enemy HP and damage, fixed pikachu\'s slam damage -->
<!-- edit: 9/23 - N - updated OTs, reset damage for DDoS to 0 -->
<!-- edit: 9/26 - K - version 12 -->
<!-- edit: 9/28 - K - version 13, added struggle move -->
<!-- edit: 9/29 - K - added areYouSureText and helpTitle -->
<!-- edit: 9/30 - K - v15 updated copy for win screen -->
<!-- edit: 9/30 - N - reduced damage of pursuit, updated PP for ronald\'s moves, updated heights and weights, updated injured miltank\'s OT, updated various dialog changes from joel -->
<!-- edit: 10/2 - N - tuned PP and damaged for some of jiggly\'s and grimace\'s moves, less HP for jiggly, more HP for slaughterhouse workers and ronald. less PP and chance for paralysis for charge beam, less damage for udder madness. more damage for ronald\'s moves. -->
<!-- edit: 10/3 - K - added "shake" variable for some attack moves -->
<!-- edit: 10/3 - N - fixed cage lasso name, increased miltank HP, reduced ronald HP, damage, changed tense of all attacks -->
<!-- edit: 10/6 - K - added scrolling map sequences -->
<!-- edit: 10/7 - N - change back tense of all attacks -->
<!-- edit: 10/7 - N - changed HP of customer and slaughterhouse workers and ronald -->
<!-- edit: 10/8 - K - changed scroll speed of first map -->
<!-- edit: 10/9 - K - sped up scrolling on slaughterhouse workers map, updated to v20 -->

<blackAndBlue>
    <!-- available options for "continueMode" are "healPokemon" and "newGame" -->
    <!-- available options for "overrideLogo" are "useURLOfSite", "peta", "peta2", "petaKids", "petaPresents", "petaIndia", and "petaAsiaPacific" -->
    <!-- available options for "treasuresUseURLOfCurrentSite" are "true" and "false"
     if true, the URL of the site the .swf is located will be used and the treasure link will be appended to it
     if false, the treasure link will be used by itself, regardless of the URL of the current site -->
    <config versionNumber="v22" continueMode="healPokemon" overrideLogo="useURLOfSite" treasuresUseURLOfCurrentSite="false"/>
    <gamegenie playerOneHitKO="false" opponentOneHitKO="false" firstScreen="1" firstMap="0" firstBattle="0" startingPokemon="pikachu" allPokemon="false" skipBattleEnabled="true" allTreasures="false" mute="false" startBattleOverride="false" versionNumberEnabled="false"/>
    <treasures>
        <treasure id="mcCrueltyVideo" link="https://games.peta.org/pokemon-red-white-blue-parody-game/bonus-mccruelty-video.php" />
        <treasure id="wallpaper" link="https://games.peta.org/pokemon-red-white-blue-parody-game/bonus-pokemon-parody-wallpaper.php" />
        <treasure id="tradingCards" link="https://games.peta.org/pokemon-red-white-blue-parody-game/bonus-pokemon-parody-trading-cards.php" />
    </treasures>
	<trainers>
		<trainer id="extrañoMisterioso" mcID="extrañoMisterioso" health="35" gender="male" displayName="Extraño Misterioso" possessiveName="Extraño Misterioso\'s" pokemonID="miltank" type="normal" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="Defeated" swfName="trainers/animation_asset_mysteriousstranger.swf">
			<moves>
				<move id="cageToss" mcName="Attack: Lazo de Jaula" name="Lazo de Jaula" description="Extraño Misterioso hurled harmful Poké Balls at %selected%!" type="fire" damage="3" speed="1" pp="5" shake="125,160" />
				<move id="butcher" mcName="Attack: Carnicero" name="Carnicero" description="Extraño Misterioso chopped away at %selected%!" type="steel" damage="7" speed="1" pp="12" shake="166,174,180,188,195,203" />
				<move id="dehorning" mcName="Ataque: Descorne" name="Descorne" description="Extraño Misterioso dished out punishment to %selected%!" type="steel" damage="12" speed="1" pp="3"/>
			</moves>
		</trainer>
		<trainer id="clienteMcDonalds" mcID="clienteMcDonalds" health="65" gender="male" displayName="Cliente de McDonald\'s" possessiveName="Cliente de McDonald\'s\'s" pokemonID="jigglypuff" type="poison" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="Defeated" swfName="trainers/animation_asset_mcdonaldscustomer.swf">
			<moves>
				<move mcName="Ataque: Mordisco" name="Bite" description="Cliente de McDonald\'s gnawed furiously on %selected%!" type="dark" damage="12" speed="1" pp="15" shake="109,116,122,129" />
				<move mcName="Ataque: DDoS" name="DDoS Attack" description="Cliente de McDonald\'s dealt a crippling blow to %selected%!" type="normal" damage="0" speed="2" pp="2" />
				<move mcName="Ataque: Discurso" name="Rant" description="Cliente de McDonald\'s hurled a torrent of abuse at %selected%!" type="normal" attackEffect="1" damage="0" speed="1" pp="3" />
			</moves>
		</trainer>
		<trainer id="trabajadoresMatadero" mcID="trabajadoresMatadero" health="75" gender="plural" displayName="Trabajadores del Matadero" possessiveName="Trabajadores del Matadero\'" pokemonID="grimace" type="steel" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="Defeated" swfName="trainers/animation_asset_slaughterhouseworkers.swf">
			<moves>
				<move mcName="Ataque: Cuchillo de Carnicero" name="Meat Cleaver" description="The Trabajadores del Matadero took a bloody swipe at %selected%!" type="steel" damage="7" speed="1" pp="15" shake="113,143" />
				<move mcName="Ataque: Aguijón Eléctrico" name="Aguijón Eléctrico" description="The Trabajadores del Matadero sent a bolt of electricity through %selected%!" type="electric" damage="10" speed="1" pp="15" shake="151,189" />
				<move mcName="Ataque: Baba Rosa" name="Baba Rosa" description="The Trabajadores del Matadero slimed %selected% with a flood of pink goo!" type="poison" poison="60" damage="0" speed="1" pp="5" />
			</moves>
		</trainer>
		<trainer id="ronald" mcID="ronald" health="100" gender="male" displayName="Ronald McDonald" possessiveName="Ronald McDonald\'s" pokemonID="pikachu" type="ghost" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="defeated" swfName="trainers/animation_asset_ronald.swf">
			<moves>
				<move mcName="Ataque: McCaptura" name="McCapture" description="Ronald McDonald mangled %selected% with a rusty bear trap!" type="steel" damage="14" speed="1" pp="8" />
				<move mcName="Ataque: McCastigo" name="McPunishment" description="Ronald McDonald hit %selected% with a cruel attack!" type="normal" damage="10" speed="1" pp="8" shake="221,268" />
				<move mcName="Ataque: McMarca" name="McBrand" description="Ronald McDonald stabbed at %selected% with a red-hot cattle brand!" type="fire" damage="10" speed="1" pp="5" />
			</moves>
		</trainer>
	</trainers>
	<pokemons>
		<pokemon id="pikachu" mcID="pikachu" height="1\'4&quot;" weight="13.2 lbs" health="30" gender="male" displayName="Pikachu" possessiveName="Pikachu\'s" species="Mouse Pokémon" type="electric" displayType="electric" originalEntrenador="Ash" description="Brave and radical Pokémon who leads the Pokémon Liberation" pokedexNumber="25" swfName="pokemon/animation_asset_pikachu.swf" readyFrame="ready" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Golpe" name="Golpe" description="Pikachu courageously slammed the %opponent%!" type="normal" damage="10" speed="1" pp="15" shake="178,210" />
				<move mcName="Rayo Carga" name="Rayo Carga" description="Pikachu stunned %opponent% with a powerful laser beam!" type="electric" damage="10" speed="1" pp="4" paralyze="40" />
				<move mcName="AbrazoGrupal" name="Abrazo Grupal" description="Pikachu smothered %opponent% with a loving embrace!" type="peta" damage="0" speed="1" pp="5" defenseEffect="-1" />
				<move mcName="Protesta" name="Protesta" description="Pikachu beat down on %opponent% with some powerful words!" type="peta" damage="0" speed="1" pp="5" attackEffect="-1" />
			</moves>
		</pokemon>
		<pokemon id="miltank" mcID="miltank" height="3\'11&quot;" weight="166.4 lbs" health="40" gender="female" displayName="Miltank" possessiveName="Miltank\'s" species="Milk Cow Pokémon" type="normal" displayType="normal" originalEntrenador="Doctor Light" description="Pokémon who\'s been treated poorly and forced to fight by the Extraño Misterioso" pokedexNumber="241" swfName="pokemon/animation_asset_miltank.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Attack: Desenrollar" name="Roll Out" description="%miltank% buffeted %opponent%!" type="rock" damage="15" speed="1" pp="5" shake="99,130" />
				<move mcName="Ataque: Cabezazo Zen" name="Cabezazo Zen" description="%miltank% rammed into %opponent% head first!" type="psychic" damage="8" speed="1" pp="15" />
				<move mcName="Ataque: Cuerno de Toro" name="Bull Horn" description="%miltank% attacked %opponent% with a sonic boom!" type="peta" damage="0" speed="1" pp="5" confuse="40" />
				<move mcName="Ataque: Locura de Ubre" name="Locura de Ubre" description="%miltank% bamboozled and hurt %opponent%!" type="peta" damage="10" speed="1" pp="3" />
			</moves>
		</pokemon>
		<pokemon id="jigglypuff" mcID="jigglypuff" height="1\'8&quot;" weight="12.1 lbs" health="20" gender="female" displayName="Jigglypuff" possessiveName="Jigglypuff\'s" species="Balloon Pokémon" type="fairy" displayType="fairy" originalEntrenador="Professor Layton" description="Pokémon who\'s been cruelly experimented on by the Cliente de McDonald\'s" pokedexNumber="39" swfName="pokemon/animation_asset_jigglypuff.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Attack: Canto" name="Canto" description="%jigglypuff% warbled a soporific melody at %opponent%!" type="normal" damage="0" speed="1" pp="5" sleep="100" />
				<move mcName="Attack: Rest" name="Rest" description="%jigglypuff% took a well-earned and invigorating nap!" type="psychic" damage="0" speed="1" pp="3" rest="100" />
				<move mcName="PETA Attack: Rally" name="Vergüenza" description="%jigglypuff% attacked %opponent% with the help of some friends!" type="peta" damage="10" speed="1" pp="5" />
				<move mcName="PETA Attack: Lettuce Lady" name="Lettuce Lady" description="%jigglypuff% disoriented %opponent% with a curiously potent salad!" type="peta" damage="6" paralyze="50" speed="1" pp="5" />
			</moves>
		</pokemon>
		<pokemon id="grimace" mcID="grimace" height="5\'8&quot;" weight="102.2 lbs" health="35" gender="male" displayName="Grimace" possessiveName="Grimace\'s" species="Grimace Pokémon" type="poison" displayType="grimace" originalEntrenador="Ronald" description="Pokémon who\'s been captured and abused by the McDonald\'s Corporation." pokedexNumber="666" swfName="pokemon/animation_asset_grimace.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Attack: Poison Jab" name="Poison Jab" description="%grimace% aimed a toxic punch at %opponent%!" type="poison" damage="4" speed="1" pp="10" poison="40"/>
				<move mcName="Attack: Pursuit" name="Pursuit" description="%grimace% seized %opponent% with a crushing grip!" type="dark" damage="7" speed="1" pp="6" shake="147,197" />
				<move mcName="PETA Attack: Paint" name="Paint" description="%grimace% sullied %opponent% with an odious coat of paint!" type="peta" damage="8" speed="1" pp="3" />
				<move mcName="PETA Attack: Bulk Up" name="Bulk Up" description="%grimace% was energized!" type="peta" damage="0" speed="1" pp="5" attackEffect="1" defenseEffect="1" />
			</moves>
		</pokemon>
		<pokemon id="injuredMiltank" mcID="miltank" height="1\'8&quot;" weight="21.8 lbs" health="30" gender="female" displayName="Injured Miltank" possessiveName="Injured Miltank\'s" species="Milk Cow Pokémon" type="normal" displayType="normal" originalEntrenador="Doctor Light" description="Pokémon who was nearly kidnapped by the Extraño Misterioso" pokedexNumber="241" swfName="pokemon/animation_asset_miltank.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Attack: Desenrollar" name="Roll Out" description="%miltank% buffeted %opponent%!" type="rock" damage="15" speed="1" pp="5" />
				<move mcName="Ataque: Cabezazo Zen" name="Cabezazo Zen" description="%miltank% rammed into %opponent% head first!" type="psychic" damage="8" speed="1" pp="15" />
				<move mcName="Ataque: Cuerno de Toro" name="Bull Horn" description="%miltank% attacked %opponent% with a sonic boom" type="peta" damage="0" speed="1" pp="5" confuse="30" />
				<move mcName="Ataque: Locura de Ubre" name="Locura de Ubre" description="%miltank% bamboozled and hurt %opponent%!" type="peta" damage="15" speed="1" pp="3" />
			</moves>
		</pokemon>
		<pokemon id="tepig" mcID="tepig" height="1\'8&quot;" weight="21.8 lbs" health="30" gender="female" displayName="Tepig" species="Fire Pig Pokémon" type="fire" displayType="fire" originalEntrenador="Cheren" description="Pokémon who\'s been treated poorly and forced to fight by Cheren" pokedexNumber="498" swfName="pokemon/animation_asset_tepig.swf" readyFrame="ready" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move id="takeDown" mcName="takeDown" name="Derribo" description="%tepig% buffeted %opponent%!" type="normal" damage="15" speed="1" pp="5" />
				<move id="ember" mcName="ember" name="Ascuas" description="%tepig% toasted %opponent% with a fiery blast!" type="fire" damage="10" speed="1" pp="5" />
				<move id="petition" mcName="petition" name="Petición" description="%tepig% battered %opponent% with a powerfully worded entreaty!" type="peta" damage="15" speed="1" pp="3" />
				<move id="shame" mcName="shame" name="Vergüenza" description="%tepig% shamed %opponent% with some hard truths!" type="peta" damage="0" speed="1" pp="5" defenseEffect="-1" />
			</moves>
		</pokemon>
		<pokemon id="snivy" mcID="snivy" height="2\'0&quot;" weight="17.9 lbs" health="25" gender="female" displayName="Snivy" species="Grass Snake Pokémon" type="grass" displayType="grass" originalEntrenador="Profesora Encina" description="Pokémon who\'s been cruelly experimented on by Profesora Encina" pokedexNumber="495" swfName="pokemon/animation_asset_snivy.swf" readyFrame="normal" dodgeFrame="Dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Constricción" name="Constricción" description="%snivy% wrapped up %opponent%!" type="normal" damage="5" speed="1" pp="10" trap="100" />
				<move mcName="BullHorn" name="Bull Horn" description="%snivy% attacked %opponent% with a sonic boom!" type="peta" damage="0" speed="1" pp="5" confuse="100" />
				<move mcName="Educar" name="Educar" description="%snivy% taught %opponent% a lesson!" type="peta" damage="0" speed="1" pp="5" defenseEffect="-1" />
			</moves>
		</pokemon>
		<pokemon id="oshawott" mcID="oshawott" height="1\'8&quot;" weight="13.0 lbs" health="35" gender="male" displayName="Oshawott" species="Sea Otter Pokémon" type="water" displayType="water" originalEntrenador="Ghethis" description="Pokémon who\'s been skinned alive for Ghethis\' fur trade" pokedexNumber="501" swfName="pokemon/animation_asset_oshawott.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">
			<moves>
				<move mcName="Placaje" name="Placaje" description="%oshawott% roughed up %opponent%!" type="normal" damage="5" speed="1" pp="15" />
				<move mcName="PistolaAgua" name="Pistola Agua" description="%oshawott% soaked %opponent% with a watery blast!" type="water" damage="15" speed="1" pp="10" />
				<move mcName="Reclutar" name="Reclutar" description="%oshawott% bamboozled %opponent%!" type="peta" damage="18" speed="1" pp="3" />
			</moves>
		</pokemon>
	</pokemons>
	<battles>
		<battle id="battle1" opponentID="extrañoMisterioso" startTextID="battle1Start" winTextID="battle1Win" backgroundID="desert" music="MusicBattle1" />
		<battle id="battle2" opponentID="clienteMcDonalds" startTextID="battle2Start" winTextID="battle2Win" backgroundID="grass" music="MusicBattle2" />
		<battle id="battle3" opponentID="trabajadoresMatadero" startTextID="battle3Start" winTextID="battle3Win" backgroundID="night" music="MusicBattle1" />
		<battle id="battle4" opponentID="ronald" startTextID="battle4Start" winTextID="battle4Win" backgroundID="stadium" music="MusicBattle2" />
	</battles>
	<maps>
        <map id="map1" startMapMCName="map0" treasureID="mcCrueltyVideo">
            <action id="setup" characters="portal, extrañoMisteriosoFront, pikachuStop, miltank" />
            <action id="animate" characterID="pikachuStop" properties="x,y" to="210,250" time="0" />
            <action id="animate" characterID="miltank" properties="x,y" to="315,380" time="0" />
            <action id="animate" characterID="extrañoMisteriosoFront" properties="x,y" to="300,100" time="0" />
            <action id="animate" characterID="portal" properties="x,y,alpha" to="-500,-500,0" time="0" />
            <action id="dialog" characterID="extrañoMisteriosoFront" text="Extraño Misterioso: Be seeing you, Pokémon." />
            <action id="info" text="*Extraño Misterioso disappears through a curious portal*" />
            <action id="swapCharacter" oldCharacterID="extrañoMisteriosoFront" newCharacterID="extrañoMisteriosoBack" />
            <action id="animate" characterID="portal" properties="x,y" to="299,107" time="0" />
            <action id="animateCharacter" characterID="portal" />
            <action id="animate" characterID="portal" properties="alpha" from="0" to="1" time="1" />
            <action id="animate" characterID="extrañoMisteriosoBack" properties="tint" to="0xFFFFFF" time="0.5" delay="0.5" />
            <action id="playSound" sound="teleport" />
            <action id="animate" characterID="extrañoMisteriosoBack" properties="alpha" to="0" time="0.5" delay="1" wait="true" />
            <action id="showTreasure" x="335" y="190" />
            <action id="dialog" characterID="pikachuStop" text="Pikachu: Look, he\'s left something behind." />
            <action id="openTreasure" wait="true" />
            <action id="areYouSurePrompt" wait="true" needsSkip="true" oncePerGame="true" text="Are you sure you don\'t want to open the chest?" />
            <action id="watchTreasure" text="Pikachu opened the chest! A cartridge was inside!" wait="true" needsOpen="true" />
            <action id="dialog" characterID="miltank" text="%miltank%: OMG! So this McDonald\'s corporation is killing Pokémon to feed them to humans?" needsOpen="true" />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: I don\'t think those were Pokémon they were killing.... Humans kill whoever they want, however they want." needsOpen="true" />
            <action id="dialog" characterID="miltank" text="%miltank%: But just because they are all different from us, it doesn\'t mean we should ignore it." needsOpen="true" />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: Exactly. We have to stop people from eating other beings, and we have to stop this McDonald\'s corporation." needsOpen="true" />
            <action id="dialog" characterID="miltank" text="%miltank%: Let\'s Desenrollar!" />
            <action id="dialog" characterID="miltank" text="Pikachu: Uh, maybe we should just walk." />
            <action id="hideTreasure" />
            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />
            <action id="animateCharacter" characterID="pikachuWalk" />
            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="1.25" />
            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="1.75" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="15" time="2" ease="Linear.easeNone" />
            <action id="animate" characterID="pikachuWalk" properties="tint" to="0xffffff" time="0.5" delay="1" />
            <action id="animate" characterID="pikachuWalk" properties="alpha" to="0" time="0.5" delay="1.5" />
            <action id="animateCharacter" characterID="miltank" />
            <action id="animate" characterID="miltank" properties="y" to="105" time="2.25" ease="Linear.easeNone" />
            <action id="animate" characterID="miltank" properties="tint" to="0xffffff" time="0.5" delay="1.5" />
            <action id="animate" characterID="miltank" properties="alpha" to="0" time="0.5" delay="2" wait="true" />
            <action id="fadeOut" speed="0.5" wait="true" />
            <action id="swapCharacter" oldCharacterID="extrañoMisteriosoBack" newCharacterID="clienteMcDonalds" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="365" time="0" />
            <action id="animate" characterID="miltank" properties="y" to="495" time="0" />
            <action id="animate" characterID="clienteMcDonalds" properties="x,y,alpha,tint" to="300,-411,1,null" time="0" />
            <action id="animate" characterID="portal" properties="y" to="450" time="0" />
            <action id="swapMap" mapName="map1" />
            <action id="fadeIn" speed="0.5" wait="true" />
            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="0.1" />
            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="0.6" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="115" time="1.5" ease="Linear.easeNone" />
            <action id="animate" characterID="pikachuWalk" properties="alpha" to="1" time="0.5" />
            <action id="animate" characterID="pikachuWalk" properties="tint" to="null" time="0.5" delay="0.5" />
            <action id="animate" characterID="miltank" properties="alpha" to="1" time="0.5" delay="0.25" />
            <action id="animate" characterID="miltank" properties="tint" to="null" time="0.5" delay="0.75" />
            <action id="animate" characterID="portal" properties="alpha" to="0" time="1" delay="0.75" />
            <action id="animate" characterID="miltank" properties="y" to="245" time="1.5" ease="Linear.easeNone" wait="true" />
            <action id="infiniteScrollMap" action="start" time="3" />
            <action id="dialog" characterID="miltank" text="%miltank%: Whoa, where are we?" />
            <action id="dialog" characterID="pikachuWalk" text="Pikachu: This is where the Extraño Misterioso was from. I see a giant yellow M up ahead." />
            <action id="dialog" characterID="pikachuWalk" text="Pikachu: That must be McDonald\'s, where they turn living, feeling beings into food for unkind humans." />
            <action id="infiniteScrollMap" action="end" endMap="map1_main" wait="true" />
            <action id="animate" characterID="clienteMcDonalds" properties="y" to="100" time="scrollMap" ease="Linear.easeNone" wait="true" />
            <action id="stopAnimateCharacter" characterID="miltank" />
            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />
            <action id="dialog" characterID="miltank" text="%miltank%: What?! You\'re on the window! &quot;Free Pokémon toy with every Happy Meal?!&quot;" />
            <action id="dialog" characterID="miltank" text="%miltank%: They have Pikachu, Tepig, Snivy, and Oshawott toys!" />
            <action id="dialog" characterID="pikachuStop" text="Pikachu: How could they do this? They are using me, because I am so cute, to sell their death burgers!" />
            <action id="dialog" characterID="pikachuStop" text="Pikachu: I did not approve of them using my likeness! This is a total violation of my publicity rights. Get me a lawyer!" />
            <action id="dialog" characterID="miltank" text="%miltank%: There\'s someone! Excuse me, sir. Can you help us?" />
            <action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: Wow! Real-life Pokémon! I love you guys! I love your games sooo much!" />
			<action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: You could just slap a Pikachu face on a pinball game, and I\'d buy it! Oh, wait, they already did that..." />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: Is this where they torture and kill living beings and sell them as food items?" />
            <action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: They don\'t kill animals right here, but they sell them prepared as food, and let me tell you, they are delicious." />
            <action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: Mmm...bacon! I love meat! Chicken nuggets is like my family!" />
            <action id="dialog" characterID="miltank" text="%miltank%: You eat animals? But you love Pokémon? I don\'t understand the difference." />
            <action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: You\'re not vegans are you? How do you find a vegan at a dinner party? Don\'t worry - they\'ll let you know." />
            <action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: Ha, ha! Man, I love meat! Heeey, y\'all actually look kinda tasty, too." />
            <action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: I betchya whoever owns you wouldn\'t mind if I took a bite! If we can farm animals, why not Pokémon, too?" />
			<action id="dialog" characterID="clienteMcDonalds" text="Cliente de McDonald\'s: Let\'s get some feedlots going and grow you real big! I\'d be lovin\' it, mm-mmm! Prepare to be downvoted!" />
            <action id="startBattle" text="Cliente de McDonald\'s attacks!" />
        </map>
		<map id="map2" startMapMCName="map1_main" treasureID="wallpaper">
            <action id="setup" characters="protesters, pikachuStop, miltank, jigglypuff" />
            <action id="animate" characterID="pikachuStop" properties="x,y" to="210,250" time="0" />
            <action id="animate" characterID="miltank" properties="x,y" to="315,380" time="0" />
            <action id="animate" characterID="jigglypuff" properties="x,y" to="285,440" time="0" />
            <action id="animate" characterID="protesters" properties="x,y" to="290,55" time="0" />
            <action id="animateCharacter" characterID="protesters" />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: There are protesters outside of the McDonald\'s." />
			<action id="dialog" characterID="miltank" text="%miltank%: Team Plasma! They\'re here to fight for the rights of animals &amp; Pokémon!" />
			<action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />
            <action id="animateCharacter" characterID="pikachuWalk" />
            <action id="animateCharacter" characterID="miltank" />
            <action id="animateCharacter" characterID="jigglypuff" />
			<action id="animate" characterID="pikachuWalk" properties="y" to="160" time="1" ease="Linear.easeNone" />
			<action id="animate" characterID="miltank" properties="y" to="290" time="1" ease="Linear.easeNone" />
			<action id="animate" characterID="jigglypuff" properties="y" to="350" time="1" ease="Linear.easeNone" wait="true" />
			<action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />
            <action id="stopAnimateCharacter" characterID="miltank" />
            <action id="stopAnimateCharacter" characterID="jigglypuff" />
			<action id="dialog" characterID="miltank" text="%miltank%: Are you with Team Plasma?" />
			<action id="dialog" characterID="protesters" text="Protestaer: No, I\'m with PETA — People for the Ethical Treatment of Animals. We believe animals are not ours to eat or abuse in any way." />
			<action id="dialog" characterID="jigglypuff" text="%jigglypuff%: Pokémon, too?" />
			<action id="dialog" characterID="protesters" text="Protestaer: Pokémon, too." />
			<action id="dialog" characterID="miltank" text="%miltank%: Wow, you guys sound great! *Swoon*" />
			<action id="dialog" characterID="jigglypuff" text="%jigglypuff%: Are you all so attractive? Would you like to hear my new power ballad about Pokémon Liberators? *Swoon*" />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: But can you help us stop McDonald\'s and the humans who have sold us out to promote eating tortured animals?" />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: McDonald\'s is killing animals, and someone is letting them use Pokémon to make people think it\'s OK." />
			<action id="dialog" characterID="protesters" text="Protestaer: I can tell you where McDonald\'s supplier\'s slaughterhouse is. Maybe that will help. And please take this as a good luck charm." />
            <action id="showTreasure" x="335" y="120" />
            <action id="openTreasure" wait="true" />
            <action id="areYouSurePrompt" wait="true" needsSkip="true" oncePerGame="true" text="Are you sure you don\'t want to open the chest?" />
            <action id="watchTreasure" text="Pikachu opened the chest! A desktop wallpaper was inside!" wait="true" needsOpen="true" />
            <action id="hideTreasure" />
            <action id="fadeOut" speed="0.5" wait="true" />
            <action id="swapMap" mapName="map2" />
            <action id="swapCharacter" oldCharacterID="protesters" newCharacterID="trabajadoresMatadero" />
            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />
            <action id="animateCharacter" characterID="pikachuWalk" />
            <action id="animateCharacter" characterID="miltank" />
            <action id="animateCharacter" characterID="jigglypuff" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="200" time="0" />
            <action id="animate" characterID="miltank" properties="y" to="330" time="0" />
            <action id="animate" characterID="jigglypuff" properties="y" to="390" time="0" />
            <action id="animate" characterID="trabajadoresMatadero" properties="x,y" to="300,-435" time="0" />
            <action id="fadeIn" speed="0.5" />
            <action id="infiniteScrollMap" action="startAndEnd" time="3" endMap="map2_main" wait="true" />
            <action id="animate" characterID="trabajadoresMatadero" properties="y" to="65" time="scrollMap" ease="Linear.easeNone" wait="true" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="90" time="0.75" ease="Linear.easeNone" />
            <action id="animate" characterID="miltank" properties="y" to="220" time="0.75" ease="Linear.easeNone" />
            <action id="animate" characterID="jigglypuff" properties="y" to="280" time="0.75" ease="Linear.easeNone" wait="true"/>
            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />
            <action id="stopAnimateCharacter" characterID="miltank" />
            <action id="stopAnimateCharacter" characterID="jigglypuff" />
            <action id="info" text="*Two Trabajadores del Matadero surprise the party!*" />
            <action id="dialog" characterID="trabajadoresMatadero" text="Trabajadores del Matadero: Halt! How did you escape from your cage, cow?" />
			<action id="dialog" characterID="miltank" text="%miltank%: I\'m not even a cow. I\'m a Miltank Pokémon." />
			<action id="dialog" characterID="trabajadoresMatadero" text="Trabajadores del Matadero: If we can milk you, you\'re a cow. We\'ve got lots of cheese to make." />
			<action id="dialog" characterID="miltank" text="%miltank%: My milk is for my babies! Leave me alone." />
            <action id="startBattle" text="Pikachu: We\'re gonna shut this place down!" />
        </map>
		<map id="map3" startMapMCName="map3" treasureID="tradingCards">
            <action id="setup" characters="ash, pikachuStop, miltank, jigglypuff, grimace" />
            <action id="scrollMap" properties="y" to="-500" time="0" />
            <action id="animate" characterID="pikachuStop" properties="x,y" to="210,150" time="0" />
            <action id="animate" characterID="miltank" properties="x,y" to="315,280" time="0" />
            <action id="animate" characterID="jigglypuff" properties="x,y" to="285,340" time="0" />
            <action id="animate" characterID="grimace" properties="x,y" to="315,400" time="0" />
            <action id="animate" characterID="ash" properties="x,y" to="300,-455" time="0" />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: What kind of Pokémon is that?" />
			<action id="dialog" characterID="miltank" text="%miltank%: Maybe it\'s a shiny Snorlax?" />
			<action id="dialog" characterID="grimace" text="%grimace%: No, I\'m a rare Grimace Pokémon. I was a mutation created by McDonald\'s decades ago to convince children to eat their food made of tortured animals." />
			<action id="dialog" characterID="grimace" text="%grimace%: McDonald\'s doesn\'t use me in their Happy Meals anymore - now they lure kids in with the most popular Pokémon." />
			<action id="dialog" characterID="jigglypuff" text="%jigglypuff%: They use cuteness to cover that they are doing evil. I\'m surprised they didn\'t capture me! I\'m definitely in the top percentage of Jigglypuff!" />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: Together we can stop the evil McDonald\'s corporation and help everyone go vegan." />
            <action id="dialog" characterID="grimace" text="%grimace%: This way!" />
            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />
            <action id="animateCharacter" characterID="pikachuWalk" />
            <action id="animateCharacter" characterID="miltank" />
            <action id="animateCharacter" characterID="jigglypuff" />
            <action id="animateCharacter" characterID="grimace" />
            <action id="animateCharacter" characterID="ash" />
            <action id="scrollMap" properties="y" to="0" time="3" ease="Linear.easeNone" />
            <action id="animate" characterID="ash" properties="y" to="60" time="3" ease="Linear.easeNone" wait="true" />
            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />
            <action id="stopAnimateCharacter" characterID="miltank" />
            <action id="stopAnimateCharacter" characterID="jigglypuff" />
            <action id="stopAnimateCharacter" characterID="grimace" />
            <action id="dialog" characterID="pikachuStop" text="Pikachu: Ash, what are you doing here?" />
            <action id="dialog" characterID="ash" text="Ash Ketchum: I heard you were in trouble." />
            <action id="dialog" characterID="ash" text="Ash Ketchum: I followed you through the portal and ran into some people from this really awesome organization PETA who said you went this way." />
            <action id="dialog" characterID="ash" text="Ash Ketchum: They gave me this awesome T-shirt. *Swoon*" />
            <action id="dialog" characterID="pikachuStop" text="Pikachu: Thanks for the offer of help, Ash, but we\'ve got this one covered." />
            <action id="dialog" characterID="ash" text="Ash Ketchum: Good to hear. And I just hope you can help the people in this world the way you helped me." />
            <action id="dialog" characterID="ash" text="Ash Ketchum: Teach them how they &quot;Gotta Free \'Em All!&quot; But hey, there might be intel in here to help you." />
            <action id="showTreasure" x="335" y="100" />
            <action id="openTreasure" wait="true" />
            <action id="areYouSurePrompt" wait="true" needsSkip="true" oncePerGame="true" text="Are you sure you don\'t want to open the chest?" />
            <action id="watchTreasure" text="Pikachu opened the chest! Pokémon cards were inside!" wait="true" needsOpen="true" />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: I hope they captured my puffy side." needsOpen="true" />
            <action id="dialog" characterID="miltank" text="%miltank%: All your sides are puffy!" needsOpen="true" />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: *blushes* You flatter me." needsOpen="true" />
            <action id="hideTreasure" />
            <action id="fadeOut" speed="0.5" wait="true" />
            <action id="swapMap" mapName="map1" />
            <action id="scrollMap" properties="y" to="0" time="0" />
            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />
            <action id="swapCharacter" oldCharacterID="ash" newCharacterID="ronald" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="600" time="0" />
            <action id="animate" characterID="miltank" properties="y" to="730" time="0" />
            <action id="animate" characterID="jigglypuff" properties="y" to="790" time="0" />
            <action id="animate" characterID="grimace" properties="y" to="850" time="0" />
            <action id="fadeIn" speed="0.5" />
            <action id="animateCharacter" characterID="pikachuWalk" />
            <action id="animateCharacter" characterID="miltank" />
            <action id="animateCharacter" characterID="jigglypuff" />
            <action id="animateCharacter" characterID="grimace" />
            <action id="animate" characterID="pikachuWalk" properties="y" to="150" time="2" ease="Linear.easeNone" />
            <action id="animate" characterID="miltank" properties="y" to="280" time="2" ease="Linear.easeNone" />
            <action id="animate" characterID="jigglypuff" properties="y" to="340" time="2" ease="Linear.easeNone" />
            <action id="animate" characterID="grimace" properties="y" to="400" time="2" ease="Linear.easeNone" wait="true" />
            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />
            <action id="stopAnimateCharacter" characterID="miltank" />
            <action id="stopAnimateCharacter" characterID="jigglypuff" />
            <action id="stopAnimateCharacter" characterID="grimace" />
            <action id="dialog" characterID="ronald" text="Ronald McDonald: I see you freed the Grimace. It\'s of no concern. Kids today have never even heard of him.  You cute Pokémon are what really sell our burgers." />
			<action id="dialog" characterID="ronald" text="Ronald McDonald: Because of you, we\'ve sold millions more burgers, Chicken McNuggets, and Filet-O-Fish made of your dead animal friends to children who love you" />
			<action id="dialog" characterID="ronald" text="Ronald McDonald: and have had all semblance of empathy eaten away by your incessant, monotonous fighting games." />
			<action id="dialog" characterID="pikachuStop" text="Pikachu: This is for all tortured Torchic and mutilated Magikarp!" />
            <action id="fadeOut" speed="0.5" wait="true" />
            <action id="startBattle" text="*A great darkness appears.*" />
        </map>
        <map id="map4" startMapMCName="map4" treasureID="mcCrueltyVideo">
            <action id="setup" characters="pikachuWalk, miltank, jigglypuff, grimace" />
            <action id="infiniteScrollMap" action="start" time="8" />
            <action id="animate" characterID="pikachuWalk" properties="x,y" to="210,50" time="0" />
            <action id="animate" characterID="miltank" properties="x,y" to="315,180" time="0" />
            <action id="animate" characterID="jigglypuff" properties="x,y" to="285,240" time="0" />
            <action id="animate" characterID="grimace" properties="x,y" to="315,300" time="0" />
            <action id="animateCharacter" characterID="pikachuWalk" />
            <action id="animateCharacter" characterID="miltank" />
            <action id="animateCharacter" characterID="jigglypuff" />
            <action id="animateCharacter" characterID="grimace" />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: Remember how you used the Global Terminal to encourage Pokémon Liberation?" />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: Maybe we could share the McDonald\'s footage we found on this world\'s communication platform to help people realize" />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: they are being duped by giant corporations into thinking Pokémon and animals are theirs to exploit and kill!" />
            <action id="dialog" characterID="grimace" text="%grimace%: Yes, we need to share this footage on The Facebook." />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: My old owner never stops talking about the legendary Pokémon called Reddit." />
            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%: We should share it with Reddit, too." />
            <action id="dialog" characterID="pikachuWalk" text="Pikachu: And with PETA. They just seem so amazing. *Swoon*" />
            <action id="dialog" characterID="miltank" text="%miltank%: Do you think people will stop supporting McDonald\'s and go vegan if they see this footage?" />
            <action id="dialog" characterID="miltank" text="%miltank%: If they understand how animals suffer?" />
            <action id="dialog" characterID="pikachuWalk" text="Pikachu: Yes, even humans can evolve." />
            <action id="gameover" />
        </map>
	</maps>
	<swfs>
		<swf id="pikachuStop" swf="map/topdown1.swf" speechOffset="74" />
		<swf id="pikachuWalk" swf="map/topdown1.swf" speechOffset="74" />
		<swf id="miltank" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="jigglypuff" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="clienteMcDonalds" swf="map/animation_asset_mapcharacters.swf" speechOffset="12" />
		<swf id="protesters" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="grimace" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="ash" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="trabajadoresMatadero" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="extrañoMisteriosoFront" swf="map/animation_asset_mapcharacters.swf" speechOffset="10" />
		<swf id="extrañoMisteriosoBack" swf="map/animation_asset_mapcharacters.swf" speechOffset="10" />
		<swf id="ronald" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />
		<swf id="portal" swf="map/animation_asset_portal.swf" speechOffset="0" />
	</swfs>
	<statusEffects>
        <statusEffect id="confusion" name="Confusion" type="normal" damage="5" speed="1" pp="-1" />
        <statusEffect id="struggle" name="Struggle" type="normal" damage="5" speed="1" pp="-1" recoil="50" />
	</statusEffects>
	<battleScripts>
		<battle id="battle1Start">
			<action id="setPokemon" newPokemonID="injuredMiltank" health="15" />
			<action id="dialog" text="A battle is in progress. Are you too late to help?" />
			<action id="dialog" text="Extraño Misterioso: I\'ve told you four times already, you old cow, we own you." />
			<action id="attack" attacker="opponent" attack="dehorning" dialog="false" />
			<action id="dialog" text="Injured Miltank: Why would you do this to me? Didn\'t your mother teach you about kindness?" />
			<action id="dialog" text="Extraño Misterioso: My mother taught me Pokémon are mine to use and abuse in any way I want. And right now I want to satisfy my hungry customers." />
			<action id="attack" attacker="opponent" attack="butcher" dialog="false" />
			<action id="faint" fainter="player" />
			<action id="dialog" text="Injured Miltank faints!" />
			<action id="dialog" text="Pikachu enters the battle!" />
			<action id="swapPokemon" newPokemonID="pikachu" />
			<action id="dialog" text="Pikachu: I can\'t believe you think it\'s OK to feed Miltank to people. Prepare for trouble!" />
			<action id="startBattle" />
		</battle>
		<battle id="battle1Win">
			<action id="dialog" text="Extraño Misterioso: The people of Teselia eat Pokémon, do they not?"/>
			<action id="dialog" text="Pikachu: Only occasionally, and we\'re fighting to change that. Everyone knows it\'s gross."/>
			<action id="dialog" text="Extraño Misterioso: Where I come from we eat other beings all the time. We\'re taught as children that we\'re the masters of the world."/>
			<action id="dialog" text="Extraño Misterioso: We use lesser beings as our entertainment, our clothing, and even our food." />
			<action id="dialog" text="Extraño Misterioso: The Pokémon universe reinforces this message by teaching us that Pokémon are humans\' property to use and abuse however they wish." />
			<action id="dialog" text="Extraño Misterioso: And you, Pikachu, play a bigger role in this than you understand." />
			<action id="dialog" text="Pikachu: That\'s not what Pokémon are about! We exist for our own purposes! So just go back to wherever you came from and leave us alone." />
			<action id="faint" fainter="opponent" />
			<action id="dialog" text="Miltank se une al equipo!" />
			<action id="namePokemon" />
			<action id="dialog" text="%miltank%: Thanks for having compassion for me!"/>
			<action id="map" />
		</battle>
		<battle id="battle2Start">
			<action id="startBattle" />
		</battle>
		<battle id="battle2Win">
			<action id="dialog" text="Cliente de McDonald\'s: You\'ve ruined my childhood! *sob*" />
			<action id="dialog" text="%selected%: That\'s a bit dramatic, don\'t you think?" />
			<action id="dialog" text="Cliente de McDonald\'s: Pokémon games are supposed to be just for fun. Why do you insist on making everything so serious? *sob*" />
			<action id="dialog" text="%selected%: In a world where animals are killed just to satisfy taste buds, don\'t you think it\'s important to celebrate kindness over callousness?" />
			<action id="dialog" text="%selected%: What if Pokémon did live in this world? From the humans I\'ve seen so far and that ad on the window, I\'m afraid all that would be offered to us is exploitation and abuse." />
			<action id="dialog" text="Jigglypuff se une al equipo!" />
			<action id="dialog" text="Cliente de McDonald\'s: Oh no, my favorite Pokémon! Jigglypuff, don\'t leave me! *sob*" />
			<action id="namePokemon" />
			<action id="dialog" text="%jigglypuff%: Finally, I\'m free! I\'m starving - my &quot;owner&quot; hasn\'t fed me in a week." />
			<action id="dialog" text="%selected%: You are looking a little less puffy..." />
			<action id="dialog" text="%jigglypuff%: Gah! My &quot;owner&quot; said he loved me, but he treated me like his property, like a piece of furniture or a toy." />
			<action id="dialog" text="%jigglypuff%: I\'m so happy to be free. I feel a song coming on!" />
			<action id="dialog" text="%selected%: Uh...maybe later." />
			<action id="dialog" text="Cliente de McDonald\'s: *sob*" />
			<action id="map" />
		</battle>
		<battle id="battle3Start">
			<action id="startBattle" />
		</battle>
		<battle id="battle3Win">
			<action id="dialog" text="Trabajadores del Matadero: I knew we should\'ve gotten a job at the tofu factory. Tofu never fights back." />
			<action id="faint" fainter="opponent" />
			<action id="dialog" text="%selected%: Let’s stop the slaughter line, and I’ll free their prisoner!" />
			<action id="dialog" text="Grimace se une al equipo!" />
			<action id="namePokemon" />
			<action id="map" />
		</battle>
		<battle id="battle4Start">
			<action id="startBattle" />
		</battle>
		<battle id="battle4Win">
			<action id="dialog" text="%selected%: Let\'s see who\'s behind this clown mask anyways." />
			<action id="animation" character="opponent" animation="Attack: Revealed" />
			<action id="dialog" text="%selected%: Why, you\'re just a man!" />
			<action id="dialog" text="McDonald\'s CEO: Not just a man. A very rich man... until you and your little friends showed up with your message of kindness for all beings." />
			<action id="dialog" text="McDonald\'s CEO: Whatever happened to &quot;Exploit Pokémon for profit?&quot; I miss Team Rocket." />
			<action id="map" />
		</battle>
		<battle id="battleCheat">
			<action id="swapPokemon" newPokemonID="cheat" />
			<action id="attack" attacker="player" attack="random" dialog="true" />
			<action id="swapPokemon" newPokemonID="original" />
			<action id="removePokemon" />
			<action id="continueBattle" />
		</battle>
	</battleScripts>
    <!--    optional parameters:
     speed - measured in seconds - defaults to 10 milliseconds -->
	<texts>
		<text id="noMorePokemon">
			<line string="¡No te quedan más Pokémon!" />
		</text>
		<text id="waitForAction">
			<line string="¿Qué debería hacer %pokemon%?" />
		</text>
		<text id="performMove">
			<line string="¡%name% usa %move%!" />
		</text>
		<text id="enemyPerformMove">
			<line string="¡%name% usa %move%!" />
		</text>
		<text id="superEffective">
			<line string="¡Es muy efectivo!" />
		</text>
		<text id="notEffective">
			<line string="No es muy efectivo..." />
		</text>
		<text id="notAffected">
			<line string="No afecta a %pokemon%..." />
		</text>
		<text id="notAffectedEnemy">
			<line string="No afecta a %pokemon%..." />
		</text>
		<text id="criticalHit">
			<line string="¡Golpe crítico!" />
		</text>
		<text id="faint">
			<line string="¡%pokemon% se debilitó!" />
		</text>
		<text id="enemyFaint">
			<line string="%name% fell!" />
		</text>
		<text id="allFaint">
			<line string="Todos los Pokémon se debilitaron ..." />
		</text>
		<text id="namePokemon">
			<line string="¿Cómo se llama este Pokémon?" />
		</text>
		<text id="foundChest">
			<line string="%pokemon% found a chest!" />
		</text>
		<text id="alreadyInBattle">
			<line string="%pokemon% is already in battle!" />
		</text>
		<text id="sendPokemonOut">
			<line string="Go! %pokemon%!" />
		</text>
		<text id="statsTitle">
			<line string="POKÉMON INFO" />
		</text>
		<text id="statsName">
			<line string="Name" />
		</text>
		<text id="statsDexNo">
			<line string="National No." />
		</text>
		<text id="statsIDNo">
			<line string="Species" />
		</text>
		<text id="statsType">
			<line string="Type" />
		</text>
		<text id="statsOriginalEntrenador">
			<line string="OT" />
		</text>
		<text id="statsInfo">
			<line string="Info:" />
		</text>
		<text id="statsMoves">
			<line string="Moves:" />
		</text>
		<text id="becameParalyzed">
			<line string="%name% became paralyzed!
%heshe% may not be able to move!" />
		</text>
		<text id="enemyBecameParalyzed">
			<line string="%name% became paralyzed!
%heshe% may not be able to move!" />
		</text>
		<text id="isParalyzed">
			<line string="%name% %is% paralyzed! 
%heshe% can\'t move!" />
		</text>
		<text id="enemyIsParalyzed">
			<line string="%name% %is% paralyzed! 
%heshe% can\'t move!" />
		</text>
		<text id="becameAsleep">
			<line string="%name% fell asleep!" />
		</text>
		<text id="enemyBecameAsleep">
			<line string="%name% fell asleep!" />
		</text>
		<text id="isAsleep">
			<line string="%name% %is% fast asleep!" />
		</text>
		<text id="enemyIsAsleep">
			<line string="%name% %is% fast asleep!" />
		</text>
		<text id="becameRested">
			<line string="¡%name% ha dormido y se ha recuperado!" />
		</text>
		<text id="enemyBecameRested">
			<line string="¡%name% ha dormido y se ha recuperado!" />
		</text>
		<text id="becameConfused">
			<line string="%name% became confused!" />
		</text>
		<text id="enemyBecameConfused">
			<line string="%name% became confused!" />
		</text>
		<text id="isConfused">
			<line string="%name% %is% confused!" />
		</text>
		<text id="noMovesLeft">
			<line string="%name% has no moves left!" />
		</text>
		<text id="enemyIsConfused">
			<line string="%name% %is% confused!" />
		</text>
		<text id="hurtConfused">
			<line string="%heshe% hurt %himherself% in %hisher% confusion!" />
		</text>
		<text id="becameTrapped">
			<line string="%name% became trapped!" />
		</text>
		<text id="enemyBecameTrapped">
			<line string="%name% became trapped!" />
		</text>
		<text id="isTrapped">
			<line string="%name% %is% still trapped!" />
		</text>
		<text id="enemyIsTrapped">
			<line string="%name% %is% still trapped!" />
		</text>
		<text id="becamePoisoned">
			<line string="%name% became poisoned!" />
		</text>
		<text id="enemyBecamePoisoned">
			<line string="%name% became poisoned!" />
		</text>
		<text id="isPoisoned">
			<line string="%name% %is% still poisoned!" />
		</text>
		<text id="enemyIsPoisoned">
			<line string="%name% %is% still poisoned!" />
		</text>
		<text id="drained">
			<line string="%name% had %hisher% energy drained!" />
		</text>
		<text id="enemyDrained">
			<line string="%name% had %hisher% energy drained!" />
		</text>
		<text id="recoilDamage">
			<line string="%name% %is% damaged by recoil!" />
		</text>
		<text id="enemyRecoilDamage">
			<line string="%name% %is% damaged by recoil!" />
		</text>
		<text id="missed">
			<line string="Missed!" />
		</text>
		<text id="avoid">
			<line string="¡%name% ha evitado el ataque!" />
		</text>
		<text id="enemyAvoid">
			<line string="¡%name% ha evitado el ataque!" />
		</text>
		<text id="statDecrease">
			<line string="%namePossessive% %statName% fell!" />
		</text>
		<text id="statIncrease">
			<line string="%namePossessive% %statName% rose!" />
		</text>
		<text id="enemyStatDecrease">
			<line string="%namePossessive% %statName% fell!" />
		</text>
		<text id="enemyStatIncrease">
			<line string="%namePossessive% %statName% rose!" />
		</text>
		<text id="statMaxed">
			<line string="It had no effect!" />
		</text>
		<text id="statusNotEffected">
			<line string="... pero no tuvo ningún efecto!" />
		</text>
		<text id="statAttack">
			<line string="attack" />
		</text>
		<text id="statDefense">
			<line string="defense" />
		</text>
		<text id="statEvasion">
			<line string="evasion" />
		</text>
		<text id="statAccuracy">
			<line string="accuracy" />
		</text>
		<text id="helpTitle">
			<line string="CÓMO JUGAR" />
		</text>
		<text id="helpButton">
			<line string="GO!" />
		</text>
		<text id="intro1">
			<line string="Durante generaciones, los humanos han dicho que quieren a los Pokémon, pero si los Pokémon vinieran a nuestro mundo de verdad y vieran cómo tratamos a los animales, ¿nos querrían a nosotros? ¿Pensarían que los juegos de Pokémon contribuyen a reducir nuestra empatía hacia los animales?" />
		</text>
		<text id="intro2">
			<line string="¿Les parecería completamente ridículo que Nintendo saque dos versiones del mismo juego y luego tenga la audacia de publicar una versión ligeramente distinta un par de años después?" />
		</text>
		<text id="intro3">
			<line string="¿Y qué harían los humanos con los Pokémon si se hicieran con ellos en el mundo real?" />
		</text>
		<text id="introButton">
			<line string="GO!" />
		</text>
		<text id="fightButton">
			<line string="LUCHAR!" />
		</text>
		<text id="pokemonButton">
			<line string="POKÉMON" />
		</text>
		<text id="submitButton">
			<line string="SUBMIT" />
		</text>
		<text id="nextButton">
			<line string="SIGUIENTE" />
		</text>
		<text id="ignoreButton">
			<line string="IGNORAR" />
		</text>
		<text id="openButton">
			<line string="ABRIR" />
		</text>
		<text id="skipButton">
			<line string="SALTAR" />
		</text>
		<text id="watchButton">
			<line string="VIEW" />
		</text>
		<text id="battleButton">
			<line string="BATTLE" />
		</text>
		<text id="sendInButton">
			<line string="SEND IN" />
		</text>
		<text id="statsButton">
			<line string="SUMMARY" />
		</text>
		<text id="continueButton">
			<line string="CONTINUAR" />
		</text>
		<text id="treasureButton">
			<line string="TESORO" />
		</text>
		<text id="quitButton">
			<line string="SALIR" />
		</text>
		<text id="backButton">
			<line string="ATRÁS" />
		</text>
		<text id="gameOver">
			<line string="GAME OVER" />
		</text>
		<text id="playAgainButton">
			<line string="JUGAR DE NUEVO!" />
		</text>
		<text id="congratulations">
			<line string="¡Enhorabuena! ¡Has ganado!" />
		</text>
        <text id="win">
            <line string="¡Has destapado la maligna conspiración de usar personajes de dibujos monos para destruir la empatía de los niños y vender comida hecha con animales torturados! Si crees en promover la empatía frente a la explotación, alza la voz por la liberación de los Pokémon y de los animales compartiendo el mensaje de bondad hacia todos los seres.

Y estate atento a «Pokémon: Púrpura — una parodia de PETA», una reedición de este juego sin mejoras apreciables, porque no sería Pokémon si no exprimiéramos el tema hasta la última gota de (bebida de) soja." />
        </text>
        <text id="winCheat">
        	<line string="¡Juega de nuevo y escribe &quot;%cheat%&quot; una vez durante un combate para pedir ayuda especial!" />
        </text>
		<text id="helpTitle">
			<line string="CÓMO JUGAR" />
		</text>
		<text id="help1">
			<line string="Select &quot;LUCHAR&quot; or
change POKÉMON!" />
		</text>
		<text id="help2">
			<line string="¡Usa ataques que aprovechen
la debilidad del rival!" />
		</text>
		<text id="help3">
			<line string="¡Derrota a todos los rivales
para liberar a todos los Pokémon!" />
		</text>
		<text id="helpButton">
			<line string="GO!" />
		</text>
		<text id="playButton">
			<line string="JUGAR!" />
		</text>
		<text id="languageChinese">
			<line string="中文" />
		</text>
		<text id="languageEnglish">
			<line string="ENGLISH" />
		</text>
        <text id="heshemale">
			<line string="he" />
		</text>
        <text id="heshefemale">
			<line string="she" />
		</text>
		<text id="hesheplural">
			<line string="they" />
		</text>
        <text id="himhermale">
			<line string="him" />
		</text>
        <text id="himherfemale">
			<line string="her" />
		</text>
        <text id="himherplural">
			<line string="them" />
		</text>
        <text id="himherselfmale">
			<line string="himself" />
		</text>
        <text id="himherselffemale">
			<line string="herself" />
		</text>
        <text id="himherselfplural">
			<line string="themselves" />
		</text>
        <text id="hishermale">
			<line string="his" />
		</text>
        <text id="hisherfemale">
			<line string="her" />
		</text>
        <text id="hisherplural">
			<line string="their" />
		</text>
        <text id="useCantoular">
			<line string="uses" />
		</text>
        <text id="usePlural">
			<line string="used" />
		</text>
        <text id="isCantoular">
			<line string="is" />
		</text>
        <text id="isPlural">
			<line string="are" />
		</text>
        <text id="possessiveAddOn">
			<line string="\'s" />
		</text>
        <text id="height">
			<line string="HEIGHT" />
		</text>
        <text id="weight">
			<line string="WEIGHT" />
		</text>
        <text id="loading">
			<line string="CARGANDO" />
		</text>
        <text id="treasure1">
			<line string="VIDEO" />
		</text>
        <text id="treasure2">
			<line string="WALLPAPER" />
		</text>
        <text id="treasure3">
			<line string="TRADING CARDS" />
		</text>
        <text id="treasureUnknown">
			<line string="????????" />
		</text>
        <text id="treasureUnlocked">
			<line string="¡HAS DESBLOQUEADO %currentTreasures% DE 3 COFRES DEL TESORO!" />
		</text>
        <text id="noTreasureUnlocked">
			<line string="¡AÚN NO HAS DESBLOQUEADO NINGÚN COFRE DEL TESORO!" />
		</text>
        <text id="treasure">
			<line string="TESORO" />
		</text>
        <text id="download">
			<line string="VIEW" />
		</text>
        <text id="gameOverText">
			<line string="Has sido derrotado en combate. Busca refugio en el Centro Pokémon más cercano, donde podrás recuperarte antes de intentarlo de nuevo." />
		</text>
        <text id="areYouSureText">
			<line string="ARE YOU SURE?" />
		</text>
        <text id="yes">
			<line string="SÍ" />
		</text>
        <text id="no">
			<line string="NO" />
		</text>
        <text id="credits">
			<line string="CRÉDITOS" />
		</text>
        <text id="share">
			<line string="COMPARTIR VÍDEO" />
		</text>
        <text id="cheatCode">
			<line string="peta" />
		</text>
	</texts>
</blackAndBlue>';
let redWhiteAndBlue_chinese_xml = '<!-- edit: 8/21 - N - first pass -->\n<!-- edit: 8/24 - K - updated trainers and pokemon -->\n<!-- edit: 8/27 - N - copy updates, updated attack names, changed some damage values and PP -->\n<!-- edit: 9/15 - K - updated animations, map sequences, battle scripts, and various other additions - v7 -->\n<!-- edit: 9/16 - N - updated names for pikachu\'s attacks, lots of minor copy changes for doc 1.4, some PP and attack data updates -->\n<!-- edit: 9/18 - K - fixed ronald mcdonald 1 hit KO bug -->\n<!-- edit: 9/18 - N - tuned paralysis odds, PP and damage for a few attacks. made battle copy past tense, updated enemy HP and damage, fixed pikachu\'s slam damage -->\n<!-- edit: 9/23 - N - updated OTs, reset damage for DDoS to 0 -->\n<!-- edit: 9/26 - K - version 12 -->\n<!-- edit: 9/28 - K - version 13, added struggle move -->\n<!-- edit: 9/29 - S - CH loc -->\n<!-- edit: 9/29 - K - added areYouSureText and helpTitle -->\n<!-- edit: 9/30 - S - CH loc -->\n<!-- edit: 10/1 - S - CH loc 2.2 doc -->\n<!-- edit: 10/2 - S - CH loc 2.4 doc -->\n<!-- edit: 10/3 - S - CH loc edits TextChanges_v2 -->\n<!-- edit: 10/3 - K - added "shake" variable for some attack moves -->\n<!-- edit: 10/3 - N - added balance changes from english config -->\n<!-- edit: 10/4 - S - CH loc copy and bug fixes -->\n<!-- edit: 10/6 - K - added scrolling map sequences -->\n<!-- edit: 10/7 - S - fixed copy issues, matched values with English config -->\n<!-- edit: 10/7 - N - changed HP of customer and slaughterhouse workers and ronald -->\n<!-- edit: 10/8 - K - changed scroll speed of first map -->\n<!-- edit: 10/8 - S - addressed issues from qa doc -->\n<!-- edit: 10/9 - K - sped up scrolling on slaughterhouse workers map, added \n in win text, updated to v20 -->\n<!-- edit: 10/9 - S - fixed tepig, treasure, rose, fell issues -->\n<!-- edit: 10/10 - K - center some button text -->\n\n<blackAndBlue>\n    <!-- available options for "continueMode" are "healPokemon" and "newGame" -->\n    <!-- available options for "overrideLogo" are "useURLOfSite", "peta", "peta2", "petaKids", "petaPresents", "petaIndia", and "petaAsiaPacific" -->\n    <!-- available options for "treasuresUseURLOfCurrentSite" are "true" and "false"\n     if true, the URL of the site the .swf is located will be used and the treasure link will be appended to it\n     if false, the treasure link will be used by itself, regardless of the URL of the current site -->\n    <config versionNumber="v23" continueMode="healPokemon" overrideLogo="useURLOfSite" treasuresUseURLOfCurrentSite="false"/>\n    <gamegenie playerOneHitKO="false" opponentOneHitKO="false" firstScreen="1" firstMap="0" firstBattle="0" startingPokemon="pikachu" allPokemon="false" skipBattleEnabled="true" allTreasures="false" mute="false" startBattleOverride="false" versionNumberEnabled="false"/>\n    <treasures>\n        <treasure id="mcCrueltyVideo" link="https://games.peta.org/pokemon-red-white-blue-parody-game/bonus-mccruelty-video.php" />\n        <treasure id="wallpaper" link="https://games.peta.org/pokemon-red-white-blue-parody-game/bonus-pokemon-parody-wallpaper.php" />\n        <treasure id="tradingCards" link="https://games.peta.org/pokemon-red-white-blue-parody-game/bonus-pokemon-parody-trading-cards.php" />\n    </treasures>\n	<trainers>\n		<trainer id="mysteriousStranger" mcID="mysteriousStranger" health="35" gender="male" displayName="神秘陌生客" possessiveName="神秘陌生客的" pokemonID="miltank" type="normal" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="Defeated" swfName="trainers/animation_asset_mysteriousstranger.swf">\n			<moves>\n				<move id="cageToss" mcName="Attack: Cage Lasso" name="囚笼套索" description="神秘陌生客朝%selected%猛掷精灵球！" type="fire" damage="3" speed="1" pp="5" shake="125,160" />\n				<move id="butcher" mcName="Attack: Butcher" name="屠宰" description="神秘陌生客狂砍%selected%！" type="steel" damage="7" speed="1" pp="12" shake="166,174,180,188,195,203" />\n				<move id="dehorning" mcName="Attack: Dehorning" name="去角" description="神秘陌生客给%selected%惩罚伺候！" type="steel" damage="12" speed="1" pp="3"/>\n			</moves>\n		</trainer>\n		<trainer id="mcdonaldsCustomer" mcID="mcdonaldsCustomer" health="65" gender="male" displayName="麦当劳顾客" possessiveName="麦当劳顾客的" pokemonID="jigglypuff" type="poison" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="Defeated" swfName="trainers/animation_asset_mcdonaldscustomer.swf">\n			<moves>\n				<move mcName="Attack: Bite" name="咬功" description="麦当劳顾客狂咬%selected%！" type="dark" damage="12" speed="1" pp="15" shake="109,116,122,129" />\n				<move mcName="Attack: DDoS" name="DDoS攻击" description="麦当劳顾客向%selected%发动劲风攻击！" type="normal" damage="0" speed="2" pp="2" />\n				<move mcName="Attack: Rant" name="怒吼" description="麦当劳顾客对%selected%连发虐待！" type="normal" attackEffect="1" damage="0" speed="1" pp="3" />\n			</moves>\n		</trainer>\n		<trainer id="slaughterhouseWorkers" mcID="slaughterhouseWorkers" health="75" gender="plural" displayName="屠宰场工人" possessiveName="屠宰场工人的" pokemonID="grimace" type="steel" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="Defeated" swfName="trainers/animation_asset_slaughterhouseworkers.swf">\n			<moves>\n				<move mcName="Attack: Meat Cleaver" name="切肉刀" description="屠宰场工人血腥挥击%selected%！" type="steel" damage="7" speed="1" pp="15" shake="113,143" />\n				<move mcName="Attack: Cattle Prod" name="赶牛棒" description="屠宰场工人朝%selected%发射电击！" type="electric" damage="10" speed="1" pp="15" shake="151,189" />\n				<move mcName="Attack: Pink Slime" name="粉红粘液" description="屠宰场工人使用粉红粘液攻击%selected%！" type="poison" poison="60" damage="0" speed="1" pp="5" />\n			</moves>\n		</trainer>\n		<trainer id="ronald" mcID="ronald" health="100" gender="male" displayName="麦当劳叔叔" possessiveName="麦当劳叔叔的" pokemonID="pikachu" type="ghost" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage" defeatFrame="defeated" swfName="trainers/animation_asset_ronald.swf">\n			<moves>\n				<move mcName="Attack: McCapture" name="捕捉" description="麦当劳叔叔用生锈的捕熊陷阱重伤%selected%！" type="steel" damage="14" speed="1" pp="8" />\n				<move mcName="Attack: McPunishment" name="惩罚" description="麦当劳叔叔向%selected%发动残酷攻击！" type="normal" damage="10" speed="1" pp="8" shake="221,268" />\n				<move mcName="Attack: McBrand" name="烙印" description="麦当劳叔叔给%selected%印上烫得发红的烙印！" type="fire" damage="10" speed="1" pp="5" />\n			</moves>\n		</trainer>\n	</trainers>\n	<pokemons>\n		<pokemon id="pikachu" mcID="pikachu" height="1\'4&quot;" weight="13.2 磅" health="30" gender="male" displayName="皮卡丘" possessiveName="皮卡丘的" species="鼠类神奇宝贝" type="electric" displayType="电" originalTrainer="小智" description="英勇过人的皮卡丘带领解放神奇宝贝运动" pokedexNumber="25" swfName="pokemon/animation_asset_pikachu.swf" readyFrame="ready" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Slam" name="猛击" description="皮卡丘英勇攻击%opponent%！" type="normal" damage="10" speed="1" pp="15" shake="178,210" />\n				<move mcName="Charge Beam" name="充电光束" description="皮卡丘使用强力激光束电击%opponent%！" type="electric" damage="10" speed="1" pp="4" paralyze="40" />\n				<move mcName="GroupHug" name="小组拥抱" description="皮卡丘用爱心抱抱使%opponent%喘不过气来！" type="peta" damage="0" speed="1" pp="5" defenseEffect="-1" />\n				<move mcName="Protest" name="抗议" description="皮卡丘以强力言辞击败%opponent%！" type="peta" damage="0" speed="1" pp="5" attackEffect="-1" />\n			</moves>\n		</pokemon>\n		<pokemon id="miltank" mcID="miltank" height="3\'11&quot;" weight="166.4 磅" health="40" gender="female" displayName="牛奶坦克" possessiveName="牛奶坦克的" species="奶牛神奇宝贝" type="normal" displayType="正常" originalTrainer="光博士" description="被神秘陌生客虐待并强迫打斗的神奇宝贝" pokedexNumber="241" swfName="pokemon/animation_asset_miltank.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Attack: Rollout" name="滚起来" description="%miltank%打击%opponent%！" type="rock" damage="15" speed="1" pp="5" shake="99,130" />\n				<move mcName="Attack: Zen Headbutt" name="意念头槌" description="%miltank%从%opponent%头部猛击！" type="psychic" damage="8" speed="1" pp="15" />\n				<move mcName="Attack: Bull Horn" name="大声公" description="%miltank%使用音速波攻击%opponent%！" type="peta" damage="0" speed="1" pp="5" confuse="40" />\n				<move mcName="Attack: Udder Madness" name="疯狂乳房" description="%miltank%迷惑并伤害%opponent%！" type="peta" damage="10" speed="1" pp="3" />\n			</moves>\n		</pokemon>\n		<pokemon id="jigglypuff" mcID="jigglypuff" height="2\'0&quot;" weight="17.9 磅" health="20" gender="female" displayName="胖丁" possessiveName="胖丁的" species="气球神奇宝贝" type="fairy" displayType="精灵" originalTrainer="雷顿教授" description="被麦当劳顾客用作残酷实验的神奇宝贝" pokedexNumber="39" swfName="pokemon/animation_asset_jigglypuff.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Attack: Sing" name="唱歌" description="%jigglypuff%对%opponent%唱出催眠曲！" type="normal" damage="0" speed="1" pp="5" sleep="100" />\n				<move mcName="Attack: Rest" name="休息" description="%jigglypuff%在辛苦战斗后睡了午觉，精神充沛！" type="psychic" damage="0" speed="1" pp="3" rest="100" />\n				<move mcName="PETA Attack: Rally" name="大募集" description="%jigglypuff%集结朋友帮忙攻击%opponent%！" type="peta" damage="10" speed="1" pp="5" />\n				<move mcName="PETA Attack: Lettuce Lady" name="生菜小姐" description="%jigglypuff%以奇异沙拉迷惑%opponent%！" type="peta" damage="6" paralyze="50" speed="1" pp="5" />\n			</moves>\n		</pokemon>\n		<pokemon id="grimace" mcID="grimace" height="5\'8&quot;" weight="102.2 磅" health="35" gender="male" displayName="奶昔大哥" possessiveName="奶昔大哥的" species="奶昔大哥神奇宝贝" type="poison" displayType="奶昔大哥" originalTrainer="麦当劳叔叔" description="被麦当劳企业捕捉并虐待的神奇宝贝" pokedexNumber="666" swfName="pokemon/animation_asset_grimace.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Attack: Poison Jab" name="毒物攻击" description="%grimace%给%opponent%有毒的一击！" type="poison" damage="4" speed="1" pp="10" poison="40"/>\n				<move mcName="Attack: Pursuit" name="追打" description="%grimace%用决定性的一击捉住%opponent%！" type="dark" damage="7" speed="1" pp="6" shake="147,197" />\n				<move mcName="PETA Attack: Paint" name="涂漆" description="%grimace%用臭油漆泼到%opponent%身上！" type="peta" damage="8" speed="1" pp="3" />\n				<move mcName="PETA Attack: Bulk Up" name="蛋白质健美" description="%grimace%恢复元气！" type="peta" damage="0" speed="1" pp="5" attackEffect="1" defenseEffect="1" />\n			</moves>\n		</pokemon>\n		<pokemon id="injuredMiltank" mcID="miltank" height="1\'8&quot;" weight="21.8 磅" health="30" gender="female" displayName="受伤的牛奶坦克" possessiveName="受伤的牛奶坦克的" species="奶牛神奇宝贝" type="normal" displayType="normal" originalTrainer="光博士" description="被神秘陌生客虐待并强迫打斗的神奇宝贝" pokedexNumber="241" swfName="pokemon/animation_asset_miltank.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Attack: Rollout" name="滚起来" description="%miltank%打击%opponent%！" type="rock" damage="15" speed="1" pp="5" />\n				<move mcName="Attack: Zen Headbutt" name="意念头槌" description="%miltank%从%opponent%头部猛击！" type="psychic" damage="8" speed="1" pp="15" />\n				<move mcName="Attack: Bull Horn" name="大声公" description="%miltank%使用音速波攻击%opponent%！" type="peta" damage="0" speed="1" pp="5" confuse="30" />\n				<move mcName="Attack: Udder Madness" name="疯狂乳房" description="%miltank%迷惑并伤害%opponent%！" type="peta" damage="15" speed="1" pp="3" />\n			</moves>\n		</pokemon>\n		<pokemon id="tepig" mcID="tepig" height="1\'8&quot;" weight="21.8 lbs" health="30" gender="female" displayName="暖暖猪" species="Fire Pig Pokémon" type="fire" displayType="fire" originalTrainer="Cheren" description="Pokémon who\'s been treated poorly and forced to fight by Cheren" pokedexNumber="498" swfName="pokemon/animation_asset_tepig.swf" readyFrame="ready" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move id="takeDown" mcName="takeDown" name="猛撞" description="%tepig%殴打%opponent%！" type="normal" damage="15" speed="1" pp="5" />\n				<move id="ember" mcName="ember" name="灰烬" description="%tepig%用大火烘烤%opponent%！" type="fire" damage="10" speed="1" pp="5" />\n				<move id="petition" mcName="petition" name="请愿" description="%tepig%振振有词向%opponent%提出请求！" type="peta" damage="15" speed="1" pp="3" />\n				<move id="shame" mcName="shame" name="耻辱" description="%tepig%揭露令人难过的事实，使%opponent%感到羞愧！" type="peta" damage="0" speed="1" pp="5" defenseEffect="-1" />\n			</moves>\n		</pokemon>\n		<pokemon id="snivy" mcID="snivy" height="2\'0&quot;" weight="17.9 lbs" health="25" gender="female" displayName="藤藤蛇" species="Grass Snake Pokémon" type="grass" displayType="grass" originalTrainer="Professor Juniper" description="Pokémon who\'s been cruelly experimented on by Professor Juniper" pokedexNumber="495" swfName="pokemon/animation_asset_snivy.swf" readyFrame="normal" dodgeFrame="Dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Wrap" name="卷起" description="%snivy%卷起%opponent%！" type="normal" damage="5" speed="1" pp="10" trap="100" />\n				<move mcName="BullHorn" name="大声公" description="%snivy%使用音爆攻击%opponent%！" type="peta" damage="0" speed="1" pp="5" confuse="100" />\n				<move mcName="Educate" name="教育" description="%snivy%替%opponent%上了一课！" type="peta" damage="0" speed="1" pp="5" defenseEffect="-1" />\n			</moves>\n		</pokemon>\n		<pokemon id="oshawott" mcID="oshawott" height="1\'8&quot;" weight="13.0 lbs" health="35" gender="male" displayName="水水獭" species="Sea Otter Pokémon" type="water" displayType="water" originalTrainer="Ghetsis" description="Pokémon who\'s been skinned alive for Ghetsis\' fur trade" pokedexNumber="501" swfName="pokemon/animation_asset_oshawott.swf" readyFrame="normal" dodgeFrame="dodge" damageFrame="takeDamage">\n			<moves>\n				<move mcName="Tackle" name="攻击" description="%oshawott%攻击%opponent%！" type="normal" damage="5" speed="1" pp="15" />\n				<move mcName="WaterGun" name="水枪" description="%oshawott%用水攻使%opponent%浑身湿透！" type="water" damage="15" speed="1" pp="10" />\n				<move mcName="Recruit" name="招募" description="%oshawott%迷惑%opponent%！" type="peta" damage="18" speed="1" pp="3" />\n			</moves>\n		</pokemon>\n	</pokemons>\n	<battles>\n		<battle id="battle1" opponentID="mysteriousStranger" startTextID="battle1Start" winTextID="battle1Win" backgroundID="desert" music="MusicBattle1" />\n		<battle id="battle2" opponentID="mcdonaldsCustomer" startTextID="battle2Start" winTextID="battle2Win" backgroundID="grass" music="MusicBattle2" />\n		<battle id="battle3" opponentID="slaughterhouseWorkers" startTextID="battle3Start" winTextID="battle3Win" backgroundID="night" music="MusicBattle1" />\n		<battle id="battle4" opponentID="ronald" startTextID="battle4Start" winTextID="battle4Win" backgroundID="stadium" music="MusicBattle2" />\n	</battles>\n	<maps>\n        <map id="map1" startMapMCName="map0" treasureID="mcCrueltyVideo">\n            <action id="setup" characters="portal, mysteriousStrangerFront, pikachuStop, miltank" />\n            <action id="animate" characterID="pikachuStop" properties="x,y" to="210,250" time="0" />\n            <action id="animate" characterID="miltank" properties="x,y" to="315,380" time="0" />\n            <action id="animate" characterID="mysteriousStrangerFront" properties="x,y" to="300,100" time="0" />\n            <action id="animate" characterID="portal" properties="x,y,alpha" to="-500,-500,0" time="0" />\n            <action id="dialog" characterID="mysteriousStrangerFront" text="神秘陌生客： 再会了，神奇宝贝。" />\n            <action id="info" text="*神秘陌生客消失在奇怪的入口后*" />\n            <action id="swapCharacter" oldCharacterID="mysteriousStrangerFront" newCharacterID="mysteriousStrangerBack" />\n            <action id="animate" characterID="portal" properties="x,y" to="299,107" time="0" />\n            <action id="animateCharacter" characterID="portal" />\n            <action id="animate" characterID="portal" properties="alpha" from="0" to="1" time="1" />\n            <action id="animate" characterID="mysteriousStrangerBack" properties="tint" to="0xFFFFFF" time="0.5" delay="0.5" />\n            <action id="playSound" sound="teleport" />\n            <action id="animate" characterID="mysteriousStrangerBack" properties="alpha" to="0" time="0.5" delay="1" wait="true" />\n            <action id="showTreasure" x="335" y="190" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘： 看！他留下了一个东西。" />\n            <action id="openTreasure" wait="true" />\n            <action id="areYouSurePrompt" wait="true" needsSkip="true" oncePerGame="true" text="确定不要打开藏宝箱？" />\n            <action id="watchTreasure" text="皮卡丘打开藏宝箱，内含一胶卷。" wait="true" needsOpen="true" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 天哪！这个麦当劳公司把神奇宝贝杀死喂给人类吃？" needsOpen="true" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 我觉得那些看起来不像神奇宝贝……但人类都是想杀谁就杀谁，想怎么杀就怎么杀。" needsOpen="true" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 但是，他们和我们不同，不代表我们就应该忽视他们的权益。" needsOpen="true" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 没错。我们必须让人类停止食用其他的动物，我们也要制止这麦当劳公司。" needsOpen="true" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 那我们滚起来吧！" />\n            <action id="dialog" characterID="miltank" text="皮卡丘： 呃，我想我们还是用走的好了。" />\n            <action id="hideTreasure" />\n            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="pikachuWalk" />\n            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="1.25" />\n            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="1.75" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="15" time="2" ease="Linear.easeNone" />\n            <action id="animate" characterID="pikachuWalk" properties="tint" to="0xffffff" time="0.5" delay="1" />\n            <action id="animate" characterID="pikachuWalk" properties="alpha" to="0" time="0.5" delay="1.5" />\n            <action id="animateCharacter" characterID="miltank" />\n            <action id="animate" characterID="miltank" properties="y" to="105" time="2.25" ease="Linear.easeNone" />\n            <action id="animate" characterID="miltank" properties="tint" to="0xffffff" time="0.5" delay="1.5" />\n            <action id="animate" characterID="miltank" properties="alpha" to="0" time="0.5" delay="2" wait="true" />\n            <action id="fadeOut" speed="0.5" wait="true" />\n            <action id="swapCharacter" oldCharacterID="mysteriousStrangerBack" newCharacterID="mcdonaldsCustomer" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="365" time="0" />\n            <action id="animate" characterID="miltank" properties="y" to="495" time="0" />\n            <action id="animate" characterID="mcdonaldsCustomer" properties="x,y,alpha,tint" to="300,-411,1,null" time="0" />\n            <action id="animate" characterID="portal" properties="y" to="450" time="0" />\n            <action id="swapMap" mapName="map1" />\n            <action id="fadeIn" speed="0.5" wait="true" />\n            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="0.1" />\n            <action id="playSound" sound="teleport" properties="alpha" from="0" to="1" time="0.6" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="115" time="1.5" ease="Linear.easeNone" />\n            <action id="animate" characterID="pikachuWalk" properties="alpha" to="1" time="0.5" />\n            <action id="animate" characterID="pikachuWalk" properties="tint" to="null" time="0.5" delay="0.5" />\n            <action id="animate" characterID="miltank" properties="alpha" to="1" time="0.5" delay="0.25" />\n            <action id="animate" characterID="miltank" properties="tint" to="null" time="0.5" delay="0.75" />\n            <action id="animate" characterID="portal" properties="alpha" to="0" time="1" delay="0.75" />\n            <action id="animate" characterID="miltank" properties="y" to="245" time="1.5" ease="Linear.easeNone" wait="true" />\n            <action id="infiniteScrollMap" action="start" time="3" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 哇，我们在哪里呀？" />\n            <action id="dialog" characterID="pikachuWalk" text="皮卡丘： 刚刚那个人就是从这来的。我看到前面有个巨大的“M”字招牌，肯定是麦当劳了。" />\n            <action id="dialog" characterID="pikachuWalk" text="皮卡丘： 在那里，活生生、有感知的动物会被做成食物，喂给坏心的人类。" />\n            <action id="infiniteScrollMap" action="end" endMap="map1_main" wait="true" />\n            <action id="animate" characterID="mcdonaldsCustomer" properties="y" to="100" time="scrollMap" ease="Linear.easeNone" wait="true" />\n            <action id="stopAnimateCharacter" characterID="miltank" />\n            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 什么？！你的照片被贴在墙上！“每购买一份开心乐园餐，就可以解救神奇宝贝玩具”？！" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 上面有皮卡丘、暖暖猪、藤藤蛇和水水獭！" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘： 他们怎么能这样？他们利用我长相可爱这点，来卖他们的致命汉堡！" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘： 我可没同意让他们用我的肖像，这根本就是违反了我的公共形象权嘛！快帮我找个律师！" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 有人来了！先生，不好意思，您可以帮助我们吗？" />\n            <action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 哇，是真正的神奇宝贝耶！我最爱你们啦，超级喜欢玩你们的游戏！" />\n			<action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 告诉你哦，要是有谁把皮卡丘的脸印在弹珠台上，我就去买下那部弹珠台！哎，不对，他们已经这么做了……" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 这里是不是他们折磨、杀害活生生的动物，并把他们当成食品卖出的地方？" />\n            <action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 他们不会在这里杀死动物，可是会在这里把动物做成食物卖出。而且我告诉你哦，实在太好吃啦！" />\n            <action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 嗯——培根！我超爱吃肉！我爱炸鸡块就像爱我家人一样。" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 你吃动物？但却爱神奇宝贝？我不觉得动物跟神奇宝贝有什么不同。" />\n            <action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 你们自己也不是素食者，不是吗？考考你，在晚餐聚会上，要怎么知道谁是素食者呢？答案就是——非常简单，他们会自己告诉你！" />\n            <action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 哈哈哈！哦，我真是太爱吃肉啦！喂，你们其实看起来都挺美味的。" />\n            <action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 我敢打赌，你们的主人肯定不介意我尝尝你们有多鲜美！我们都可以养殖动物了，为什么不能养殖神奇宝贝呢？" />\n			<action id="dialog" characterID="mcdonaldsCustomer" text="麦当劳顾客： 来盖几座饲养场，把你们个个都养肥吧！我肯定会爱死了，嗯——准备好成为全民公敌吧！" />\n            <action id="startBattle" text="*麦当劳顾客发动攻击!*" />\n        </map>\n		<map id="map2" startMapMCName="map1_main" treasureID="wallpaper">\n            <action id="setup" characters="protesters, pikachuStop, miltank, jigglypuff" />\n            <action id="animate" characterID="pikachuStop" properties="x,y" to="210,250" time="0" />\n            <action id="animate" characterID="miltank" properties="x,y" to="315,380" time="0" />\n            <action id="animate" characterID="jigglypuff" properties="x,y" to="285,440" time="0" />\n            <action id="animate" characterID="protesters" properties="x,y" to="290,55" time="0" />\n            <action id="animateCharacter" characterID="protesters" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 麦当劳外面有人抗议呢。" />\n			<action id="dialog" characterID="miltank" text="%miltank%： 电浆团！他们是要来替动物和神奇宝贝抗争的！" />\n			<action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="miltank" />\n            <action id="animateCharacter" characterID="jigglypuff" />\n			<action id="animate" characterID="pikachuWalk" properties="y" to="160" time="1" ease="Linear.easeNone" />\n			<action id="animate" characterID="miltank" properties="y" to="290" time="1" ease="Linear.easeNone" />\n			<action id="animate" characterID="jigglypuff" properties="y" to="350" time="1" ease="Linear.easeNone" wait="true" />\n			<action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />\n            <action id="stopAnimateCharacter" characterID="miltank" />\n            <action id="stopAnimateCharacter" characterID="jigglypuff" />\n			<action id="dialog" characterID="miltank" text="%miltank%： 你是电浆团的人吗？" />\n			<action id="dialog" characterID="protesters" text="抗议人士： 不，我是PETA——善待动物组织的人。我们相信动物不是供我们食用，或以任何方式虐待的。" />\n			<action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 包括神奇宝贝吗？" />\n			<action id="dialog" characterID="protesters" text="抗议人士： 没错。" />\n			<action id="dialog" characterID="miltank" text="%miltank%： 哇，你们听起来太棒了呀！*狂喜*" />\n			<action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 你们每个成员都这么棒吗？你想不想听听我最新的“神奇宝贝解放者之歌”呀？*狂喜*" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 但你能帮助我们停止麦当劳和那些出卖我们、推广食用被虐待的动物的人吗？" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 麦当劳正在杀害动物，而且有人还准许他们利用神奇宝贝来让人觉得杀害动物的行为是可以被接受的。" />\n			<action id="dialog" characterID="protesters" text="抗议人士： 我可以告诉你麦当劳供货商的屠宰场在哪里。或许这样有点帮助？也请收下这个幸运符吧！" />\n            <action id="showTreasure" x="335" y="120" />\n            <action id="openTreasure" wait="true" />\n            <action id="areYouSurePrompt" wait="true" needsSkip="true" oncePerGame="true" text="确定不要打开藏宝箱？" />\n            <action id="watchTreasure" text="*皮卡丘打开藏宝箱，内含一桌面*" wait="true" needsOpen="true" />\n            <action id="hideTreasure" />\n            <action id="fadeOut" speed="0.5" wait="true" />\n            <action id="swapMap" mapName="map2" />\n            <action id="swapCharacter" oldCharacterID="protesters" newCharacterID="slaughterhouseWorkers" />\n            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="miltank" />\n            <action id="animateCharacter" characterID="jigglypuff" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="200" time="0" />\n            <action id="animate" characterID="miltank" properties="y" to="330" time="0" />\n            <action id="animate" characterID="jigglypuff" properties="y" to="390" time="0" />\n            <action id="animate" characterID="slaughterhouseWorkers" properties="x,y" to="300,-435" time="0" />\n            <action id="fadeIn" speed="0.5" />\n            <action id="infiniteScrollMap" action="startAndEnd" time="3" endMap="map2_main" wait="true" />\n            <action id="animate" characterID="slaughterhouseWorkers" properties="y" to="65" time="scrollMap" ease="Linear.easeNone" wait="true" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="90" time="0.75" ease="Linear.easeNone" />\n            <action id="animate" characterID="miltank" properties="y" to="220" time="0.75" ease="Linear.easeNone" />\n            <action id="animate" characterID="jigglypuff" properties="y" to="280" time="0.75" ease="Linear.easeNone" wait="true"/>\n            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />\n            <action id="stopAnimateCharacter" characterID="miltank" />\n            <action id="stopAnimateCharacter" characterID="jigglypuff" />\n            <action id="info" text="*两位屠宰场工人出现，令人大吃一惊*" />\n            <action id="dialog" characterID="slaughterhouseWorkers" text="屠宰场工人： 站住！你这头牛是怎么从牢笼中逃脱的？" />\n			<action id="dialog" characterID="miltank" text="%miltank%： 我根本就不是牛。我是神奇宝贝牛奶坦克！" />\n			<action id="dialog" characterID="slaughterhouseWorkers" text="屠宰场工人： 只要你能产奶，你就是牛。我们可是要生产很多奶酪的。" />\n			<action id="dialog" characterID="miltank" text="%miltank%： 我的奶是要给我的宝宝喝的！走开，别烦我。" />\n            <action id="startBattle" text="皮卡丘： 我们要让这鬼地方关门大吉！" />\n        </map>\n		<map id="map3" startMapMCName="map3" treasureID="tradingCards">\n            <action id="setup" characters="ash, pikachuStop, miltank, jigglypuff, grimace" />\n            <action id="scrollMap" properties="y" to="-500" time="0" />\n            <action id="animate" characterID="pikachuStop" properties="x,y" to="210,150" time="0" />\n            <action id="animate" characterID="miltank" properties="x,y" to="315,280" time="0" />\n            <action id="animate" characterID="jigglypuff" properties="x,y" to="285,340" time="0" />\n            <action id="animate" characterID="grimace" properties="x,y" to="315,400" time="0" />\n            <action id="animate" characterID="ash" properties="x,y" to="300,-455" time="0" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 这是哪个神奇宝贝呀？" />\n			<action id="dialog" characterID="miltank" text="%miltank%： 或许是发光的卡比兽？" />\n			<action id="dialog" characterID="grimace" text="%grimace%： 不，我是非常罕见的神奇宝贝奶昔大哥。我是几十年前被麦当劳创造出来的“变种”，要用来说服孩子吃下用受虐动物制成的食品。" />\n			<action id="dialog" characterID="grimace" text="%grimace%： 但麦当劳现在已经不把我放在开心乐园餐里了——他们改用最受欢迎的神奇宝贝来诱惑孩子。" />\n			<action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 他们利用可爱的外表，来掩盖自己邪恶的作为。我很惊讶他们竟然没把我捉起来，我可是所有胖丁里面的佼佼者！" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘： 只要同心协力，我们就可以停止邪恶的麦当劳公司，并帮助所有人成为素食者！" />\n            <action id="dialog" characterID="grimace" text="%grimace%： 走这边！" />\n            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="miltank" />\n            <action id="animateCharacter" characterID="jigglypuff" />\n            <action id="animateCharacter" characterID="grimace" />\n            <action id="animateCharacter" characterID="ash" />\n            <action id="scrollMap" properties="y" to="0" time="3" ease="Linear.easeNone" />\n            <action id="animate" characterID="ash" properties="y" to="60" time="3" ease="Linear.easeNone" wait="true" />\n            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />\n            <action id="stopAnimateCharacter" characterID="miltank" />\n            <action id="stopAnimateCharacter" characterID="jigglypuff" />\n            <action id="stopAnimateCharacter" characterID="grimace" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘： 小智，你在这做什么？" />\n            <action id="dialog" characterID="ash" text="小智： 我听说你惹祸上身了。" />\n            <action id="dialog" characterID="ash" text="小智： 我跟在你后头出了入口，遇到一些很棒的PETA的人，他们告诉我你往这边走了。" />\n            <action id="dialog" characterID="ash" text="小智： 他们还给了我一件很酷的T-shirt！*狂喜*" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘： 谢谢你愿意帮助我们，小智，不过我们没问题的。" />\n            <action id="dialog" characterID="ash" text="小智： 太好了。我真希望你能够像当初帮助我一样来帮助世界上其他的人，让他们“解放神奇宝贝”！" />\n            <action id="dialog" characterID="ash" text="小智： 这个东西或许可以帮助你。" />\n            <action id="showTreasure" x="335" y="100" />\n            <action id="openTreasure" wait="true" />\n            <action id="areYouSurePrompt" wait="true" needsSkip="true" oncePerGame="true" text="确定不要打开藏宝箱？" />\n            <action id="watchTreasure" text="*皮卡丘打开藏宝箱，内含神奇宝贝卡*" wait="true" needsOpen="true" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 我希望他们捕捉到的是我胖的那面。" needsOpen="true" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 你每一面都很胖！" needsOpen="true" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： *脸红* 啊，你真是会说话！" needsOpen="true" />\n            <action id="hideTreasure" />\n            <action id="fadeOut" speed="0.5" wait="true" />\n            <action id="swapMap" mapName="map1" />\n            <action id="scrollMap" properties="y" to="0" time="0" />\n            <action id="swapCharacter" oldCharacterID="pikachuStop" newCharacterID="pikachuWalk" />\n            <action id="swapCharacter" oldCharacterID="ash" newCharacterID="ronald" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="600" time="0" />\n            <action id="animate" characterID="miltank" properties="y" to="730" time="0" />\n            <action id="animate" characterID="jigglypuff" properties="y" to="790" time="0" />\n            <action id="animate" characterID="grimace" properties="y" to="850" time="0" />\n            <action id="fadeIn" speed="0.5" />\n            <action id="animateCharacter" characterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="miltank" />\n            <action id="animateCharacter" characterID="jigglypuff" />\n            <action id="animateCharacter" characterID="grimace" />\n            <action id="animate" characterID="pikachuWalk" properties="y" to="150" time="2" ease="Linear.easeNone" />\n            <action id="animate" characterID="miltank" properties="y" to="280" time="2" ease="Linear.easeNone" />\n            <action id="animate" characterID="jigglypuff" properties="y" to="340" time="2" ease="Linear.easeNone" />\n            <action id="animate" characterID="grimace" properties="y" to="400" time="2" ease="Linear.easeNone" wait="true" />\n            <action id="swapCharacter" oldCharacterID="pikachuWalk" newCharacterID="pikachuStop" />\n            <action id="stopAnimateCharacter" characterID="miltank" />\n            <action id="stopAnimateCharacter" characterID="jigglypuff" />\n            <action id="stopAnimateCharacter" characterID="grimace" />\n            <action id="dialog" characterID="ronald" text="麦当劳叔叔： 我看到你把奶昔大哥给放了。没关系，反正现在的孩子都不知道他是谁。你们这些可爱的神奇宝贝才是我们汉堡的卖点。" />\n			<action id="dialog" characterID="ronald" text="麦当劳叔叔： 因为有你们，我们已经多卖出了数百万的汉堡、麦乐鸡和麦香鱼堡。这些用你们死去的动物朋友的尸体做成的东西，多讨孩子欢心呀！" />\n			<action id="dialog" characterID="ronald" text="麦当劳叔叔： 他们爱死你们了，而且透过玩你们这不断打打杀杀的游戏，他们仅存的一点同情心都被吞噬了。" />\n			<action id="dialog" characterID="pikachuStop" text="皮卡丘：就让我来代表所有受虐的火雉鸡以及被肢解的鲤鱼王教训你吧！" />\n            <action id="fadeOut" speed="0.5" wait="true" />\n            <action id="startBattle" text="*出现一团黑暗*" />\n        </map>\n        <map id="map4" startMapMCName="map4" treasureID="mcCrueltyVideo">\n            <action id="setup" characters="pikachuWalk, miltank, jigglypuff, grimace" />\n            <action id="infiniteScrollMap" action="start" time="8" />\n            <action id="animate" characterID="pikachuWalk" properties="x,y" to="210,50" time="0" />\n            <action id="animate" characterID="miltank" properties="x,y" to="315,180" time="0" />\n            <action id="animate" characterID="jigglypuff" properties="x,y" to="285,240" time="0" />\n            <action id="animate" characterID="grimace" properties="x,y" to="315,300" time="0" />\n            <action id="animateCharacter" characterID="pikachuWalk" />\n            <action id="animateCharacter" characterID="miltank" />\n            <action id="animateCharacter" characterID="jigglypuff" />\n            <action id="animateCharacter" characterID="grimace" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 记得你曾用全球终端来鼓励解救神奇宝贝吗？" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 或许我们应该把麦当劳的这段视频分享到全球信息平台上，" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 让人们了解自己被这些大企业骗了，还以为神奇宝贝和动物是他们可以随意剥削、杀害的！" />\n            <action id="dialog" characterID="grimace" text="%grimace%： 没错，我们需要把这视频放上人人网。" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 我以前的主人一直讲有个传说中的神奇宝贝叫“微博”，" />\n            <action id="dialog" characterID="jigglypuff" text="%jigglypuff%： 我们应该也要和微博分享。" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘：还要和PETA分享。他们实在太棒啦！*狂喜*" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 你认为人们看到了这个视频，了解到动物的苦难后，会停止支持那些鼓励人们虐待动物的公司，" />\n            <action id="dialog" characterID="miltank" text="%miltank%： 并且成为素食者吗？" />\n            <action id="dialog" characterID="pikachuStop" text="皮卡丘： 是的，我相信。人类也是可以进化的。" />\n            <action id="gameover" />\n        </map>\n	</maps>\n	<swfs>\n		<swf id="pikachuStop" swf="map/topdown1.swf" speechOffset="74" />\n		<swf id="pikachuWalk" swf="map/topdown1.swf" speechOffset="74" />\n		<swf id="miltank" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="jigglypuff" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="mcdonaldsCustomer" swf="map/animation_asset_mapcharacters.swf" speechOffset="12" />\n		<swf id="protesters" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="grimace" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="ash" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="slaughterhouseWorkers" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="mysteriousStrangerFront" swf="map/animation_asset_mapcharacters.swf" speechOffset="10" />\n		<swf id="mysteriousStrangerBack" swf="map/animation_asset_mapcharacters.swf" speechOffset="10" />\n		<swf id="ronald" swf="map/animation_asset_mapcharacters.swf" speechOffset="0" />\n		<swf id="portal" swf="map/animation_asset_portal.swf" speechOffset="0" />\n	</swfs>\n	<statusEffects>\n        <statusEffect id="confusion" name="Confusion" type="normal" damage="5" speed="1" pp="-1" />\n        <statusEffect id="struggle" name="Struggle" type="normal" damage="5" speed="1" pp="-1" recoil="50" />\n	</statusEffects>\n	<battleScripts>\n		<battle id="battle1Start">\n			<action id="setPokemon" newPokemonID="injuredMiltank" health="15" />\n			<action id="dialog" text="战斗正进行中。你来得及帮忙吗？" />\n			<action id="dialog" text="神秘陌生客：我已经跟你讲四次了吧，你这只老牛——你是归我们管的。" />\n			<action id="attack" attacker="opponent" attack="dehorning" dialog="false" />\n			<action id="dialog" text="受伤的牛奶坦克神奇宝贝： 你为什么要这么对我？你妈妈难道没教你要有一颗善良的心吗？" />\n			<action id="dialog" text="神秘陌生客： 我妈妈教我神奇宝贝是归我所用的，可以随意虐待。现在，我的顾客肚子饿了，我可得让他们满意。" />\n			<action id="attack" attacker="opponent" attack="butcher" dialog="false" />\n			<action id="faint" fainter="player" />\n			<action id="dialog" text="受伤的牛奶坦克昏厥" />\n			<action id="dialog" text="皮卡丘加入战斗" />\n			<action id="swapPokemon" newPokemonID="pikachu" />\n			<action id="dialog" text="皮卡丘： 我不敢相信你要把牛奶坦克喂给人吃！看招吧！" />\n			<action id="startBattle" />\n		</battle>\n		<battle id="battle1Win">\n			<action id="dialog" text="神秘陌生客： 合众地方的人们吃神奇宝贝，不是吗？"/>\n			<action id="dialog" text="皮卡丘： 这样的情况不常发生，而且我们正努力改变现状。大家都知道这样做恶心死了。"/>\n			<action id="dialog" text="神秘陌生客： 在我们那里，大家随时都在吃其他的动物。我们从小就被教导我们是万物的主人。"/>\n			<action id="dialog" text="神秘陌生客： 我们利用较弱势的生物来作为娱乐对象、衣物、甚至是食物。" />\n			<action id="dialog" text="神秘陌生客： 神奇宝贝宇宙教导我们神奇宝贝是人类的财产，可以任意使用、虐待，就更加强化了这样的观念。" />\n			<action id="dialog" text="神秘陌生客： 而皮卡丘你所扮演的角色，可不像你想得这么单纯。" />\n			<action id="dialog" text="皮卡丘： 神奇宝贝不是人类的工具！我们有自己存在的目的！所以你不如回到自己的地盘，不要再来惹我们了。" />\n			<action id="faint" fainter="opponent" />\n			<action id="dialog" text="牛奶坦克加入对话" />\n			<action id="namePokemon" />\n			<action id="dialog" text="%miltank%： 谢谢你对我这么有同情心！"/>\n			<action id="map" />\n		</battle>\n		<battle id="battle2Start">\n			<action id="startBattle" />\n		</battle>\n		<battle id="battle2Win">\n			<action id="dialog" text="麦当劳顾客： 你们毁了我的童年！*啜泣*" />\n			<action id="dialog" text="%selected%： 你不觉得这样有点太戏剧化了吗？" />\n			<action id="dialog" text="麦当劳顾客： 神奇宝贝游戏应该就只是为了好玩而已的，你们干什么把一切都想得那么严肃呢？*啜泣*" />\n			<action id="dialog" text="%selected%： 在这个世界上，动物们仅仅因为人类的口腹之欲就被杀害。你不觉得我们应该推广善良的心，而不是麻木不仁吗？" />\n			<action id="dialog" text="%selected%： 如果神奇宝贝真的存在在这个世界上，会怎么样呢？从我目前遇到的人类和窗户上的广告看来，想必我们只能沦为被剥削、虐待的对象罢了。" />\n			<action id="dialog" text="胖丁加入对话" />\n			<action id="dialog" text="麦当劳顾客： 哦，不，我最爱的神奇宝贝！胖丁，别离开我！*啜泣*" />\n			<action id="namePokemon" />\n			<action id="dialog" text="%jigglypuff%： 我终于自由啦！我快饿死了——我的“主人”已经一个星期没喂我了。" />\n			<action id="dialog" text="%selected%： 你看起来是瘦了一些……" />\n			<action id="dialog" text="%jigglypuff%： 嘎！我的“主人”说自己很爱我，但却把我当成财物一样，像是家具或玩具似的。" />\n			<action id="dialog" text="%jigglypuff%： 但我很高兴能重获自由。我开心地想唱歌呀！" />\n			<action id="dialog" text="%selected%： 呃……还是等一下再唱吧。" />\n			<action id="dialog" text="麦当劳顾客： *啜泣*" />\n			<action id="map" />\n		</battle>\n		<battle id="battle3Start">\n			<action id="startBattle" />\n		</battle>\n		<battle id="battle3Win">\n			<action id="dialog" text="屠宰场工人： 我就知道，早该在豆腐工厂找份工作。豆腐可不会打架。" />\n			<action id="faint" fainter="opponent" />\n			<action id="dialog" text="%selected%： 我来释放被囚禁的大家，你把屠宰线停掉。" />\n			<action id="dialog" text="奶昔大哥加入对话" />\n			<action id="namePokemon" />\n			<action id="map" />\n		</battle>\n		<battle id="battle4Start">\n			<action id="startBattle" />\n		</battle>\n		<battle id="battle4Win">\n			<action id="dialog" text="%selected%： 来看看这小丑面具后面藏着谁。" />\n			<action id="animation" character="opponent" animation="Attack: Revealed" />\n			<action id="dialog" text="%selected%： 嗯，不过就是个普通人嘛！" />\n			<action id="dialog" text="麦当劳执行长： 可不是普通人，而是大富翁！但这一切都被你和你那些朋友给毁了，谁让你们在那边嚷嚷要对所有生物友好。" />\n			<action id="dialog" text="麦当劳执行长： 说要“剥削神奇宝贝以获利”的都去哪了？我想念火箭兵团。" />\n			<action id="map" />\n		</battle>\n		<battle id="battleCheat">\n			<action id="swapPokemon" newPokemonID="cheat" />\n			<action id="attack" attacker="player" attack="random" dialog="true" />\n			<action id="swapPokemon" newPokemonID="original" />\n			<action id="removePokemon" />\n			<action id="continueBattle" />\n		</battle>\n	</battleScripts>\n    <!--    optional parameters:\n     speed - measured in seconds - defaults to 10 milliseconds -->\n	<texts>\n		<text id="noMorePokemon">\n			<line string="你已没有神奇宝贝！" />\n		</text>\n		<text id="waitForAction">\n			<line string="%pokemon%会怎么做？" />\n		</text>\n		<text id="performMove">\n			<line string="%name% %use% %move%！" />\n		</text>\n		<text id="enemyPerformMove">\n			<line string="%name% %use% %move%！" />\n		</text>\n		<text id="superEffective">\n			<line string="超有效！" />\n		</text>\n		<text id="notEffective">\n			<line string="效用不大……" />\n		</text>\n		<text id="notAffected">\n			<line string="对%pokemon%没有效果！" />\n		</text>\n		<text id="notAffectedEnemy">\n			<line string="对%pokemon%没有效果！" />\n		</text>\n		<text id="criticalHit">\n			<line string="致命一击！" />\n		</text>\n		<text id="faint">\n			<line string="%pokemon%昏倒！" />\n		</text>\n		<text id="enemyFaint">\n			<line string="%name%昏倒！" />\n		</text>\n		<text id="allFaint">\n			<line string="所有神奇宝贝都昏倒了……" />\n		</text>\n		<text id="namePokemon">\n			<line string="这只神奇宝贝叫什么名字？" />\n		</text>\n		<text id="foundChest">\n			<line string="%pokemon%找到了一个藏宝箱！" />\n		</text>\n		<text id="alreadyInBattle">\n			<line string="%pokemon%已在战斗中！" />\n		</text>\n		<text id="sendPokemonOut">\n			<line string="开始吧，%pokemon%！" />\n		</text>\n		<text id="statsTitle">\n			<line string="神奇宝贝信息" />\n		</text>\n		<text id="statsName">\n			<line string="神奇宝贝名称" />\n		</text>\n		<text id="statsDexNo">\n			<line string="编号" />\n		</text>\n		<text id="statsIDNo">\n			<line string="神奇宝贝品种" />\n		</text>\n		<text id="statsType">\n			<line string="神奇宝贝种类" />\n		</text>\n		<text id="statsOriginalTrainer">\n			<line string="属性" />\n		</text>\n		<text id="statsInfo">\n			<line string="信息：" />\n		</text>\n		<text id="statsMoves">\n			<line string="招数：" />\n		</text>\n		<text id="becameParalyzed">\n			<line string="%name%瘫痪，或许无法动弹！" />\n		</text>\n		<text id="enemyBecameParalyzed">\n			<line string="%name%瘫痪，或许无法动弹！" />\n		</text>\n		<text id="isParalyzed">\n			<line string="%name%瘫痪，无法动弹！" />\n		</text>\n		<text id="enemyIsParalyzed">\n			<line string="%name%瘫痪，无法动弹！" />\n		</text>\n		<text id="becameAsleep">\n			<line string="%name%睡着了！" />\n		</text>\n		<text id="enemyBecameAsleep">\n			<line string="%name%睡着了！" />\n		</text>\n		<text id="isAsleep">\n			<line string="%name%马上就睡着了！" />\n		</text>\n		<text id="enemyIsAsleep">\n			<line string="%name%马上就睡着了！" />\n		</text>\n		<text id="becameRested">\n			<line string="%name%睡了一觉，恢复健康！" />\n		</text>\n		<text id="enemyBecameRested">\n			<line string="%name%睡了一觉，恢复健康！" />\n		</text>\n		<text id="becameConfused">\n			<line string="%name%感到困惑！" />\n		</text>\n		<text id="enemyBecameConfused">\n			<line string="%name%感到困惑！" />\n		</text>\n		<text id="isConfused">\n			<line string="%name%处于困惑中！" />\n		</text>\n		<text id="noMovesLeft">\n			<line string="%name%已用尽了攻击次数！" />\n		</text>\n		<text id="enemyIsConfused">\n			<line string="%name%处于困惑中！" />\n		</text>\n		<text id="hurtConfused">\n			<line string="%name%在困惑中伤到自己！" />\n		</text>\n		<text id="becameTrapped">\n			<line string="%name%受困！" />\n		</text>\n		<text id="enemyBecameTrapped">\n			<line string="%name%受困！" />\n		</text>\n		<text id="isTrapped">\n			<line string="%name%仍受困！" />\n		</text>\n		<text id="enemyIsTrapped">\n			<line string="%name%仍受困！" />\n		</text>\n		<text id="becamePoisoned">\n			<line string="%name%中毒！" />\n		</text>\n		<text id="enemyBecamePoisoned">\n			<line string="%name%中毒！" />\n		</text>\n		<text id="isPoisoned">\n			<line string="%name%仍处于中毒中！" />\n		</text>\n		<text id="enemyIsPoisoned">\n			<line string="%name%仍处于中毒中！" />\n		</text>\n		<text id="drained">\n			<line string="%name%的能量耗尽！" />\n		</text>\n		<text id="enemyDrained">\n			<line string="%name%的能量耗尽！" />\n		</text>\n		<text id="recoilDamage">\n			<line string="%name%被反弹击中！" />\n		</text>\n		<text id="enemyRecoilDamage">\n			<line string="%name%被反弹击中！" />\n		</text>\n		<text id="missed">\n			<line string="没打中！" />\n		</text>\n		<text id="avoid">\n			<line string="%name%成功闪避攻击！" />\n		</text>\n		<text id="enemyAvoid">\n			<line string="%name%成功闪避攻击！" />\n		</text>\n		<text id="statDecrease">\n			<line string="%name%的%statName%能力下降！" />\n		</text>\n		<text id="statIncrease">\n			<line string="%name%的%statName%能力上升！" />\n		</text>\n		<text id="enemyStatDecrease">\n			<line string="%name%的%statName%能力下降！" />\n		</text>\n		<text id="enemyStatIncrease">\n			<line string="%name%的%statName%能力上升！" />\n		</text>\n		<text id="statMaxed">\n			<line string="无效！" />\n		</text>\n		<text id="statusNotEffected">\n			<line string="……无效！" />\n		</text>\n		<text id="statAttack">\n			<line string="攻击" />\n		</text>\n		<text id="statDefense">\n			<line string="防御" />\n		</text>\n		<text id="statEvasion">\n			<line string="逃避" />\n		</text>\n		<text id="statAccuracy">\n			<line string="准确度" />\n		</text>\n		<text id="helpTitle">\n			<line string="如何进行游戏" />\n		</text>\n		<text id="helpButton">\n			<line string=" 开始！" />\n		</text>\n		<text id="intro1">\n			<line string="几个世代以来，人们皆声称自己喜爱神奇宝贝，但若神奇宝贝来到真实世\n界，看到我们是如何对待动物的，他们会像我们喜欢他们一样地喜欢我们\n吗？他们难道不会感到神奇宝贝游戏在某种程度上降低了人们对动物的同情心吗？" />\n		</text>\n		<text id="intro2">\n			<line string="他们不会觉得任天堂同一时间发表两个基本相同的游戏，而几年后竟然又发表一个只是稍做改动的版本很荒谬吗？" />\n		</text>\n		<text id="intro3">\n			<line string="如果在真实世界里有神奇宝贝，人们又会怎么对待他们呢？" />\n		</text>\n		<text id="introButton">\n			<line string="  开始！" />\n		</text>\n		<text id="fightButton">\n			<line string="打斗！" />\n		</text>\n		<text id="pokemonButton">\n			<line string="神奇宝贝" />\n		</text>\n		<text id="submitButton">\n			<line string="提交" />\n		</text>\n		<text id="nextButton">\n			<line string="下一页" />\n		</text>\n		<text id="ignoreButton">\n			<line string="忽视" />\n		</text>\n		<text id="openButton">\n			<line string="打开" />\n		</text>\n		<text id="skipButton">\n			<line string="跳过" />\n		</text>\n		<text id="watchButton">\n			<line string="观看" />\n		</text>\n		<text id="battleButton">\n			<line string="战斗" />\n		</text>\n		<text id="sendInButton">\n			<line string="选择" />\n		</text>\n		<text id="statsButton">\n			<line string="概要" />\n		</text>\n		<text id="continueButton">\n			<line string="继续游戏" />\n		</text>\n		<text id="treasureButton">\n			<line string="宝藏" />\n		</text>\n		<text id="quitButton">\n			<line string="离开游戏" />\n		</text>\n		<text id="backButton">\n			<line string="上一页" />\n		</text>\n		<text id="gameOver">\n			<line string="游戏结束" />\n		</text>\n		<text id="playAgainButton">\n			<line string="再玩一次！" />\n		</text>\n		<text id="congratulations">\n			<line string="恭喜！\n你获胜了！" />\n		</text>\n        <text id="win">\n            <line string="你已成功揭露邪恶阴谋，他们从此以后无法再利用可爱卡通人物来诱骗和摧毁孩子们的同情心，无法贩卖用受虐的动物制成的食品。\n\n如果你相信我们应该鼓励同情心而非鼓励剥削与伤害，就请把爱传递出去，替\n神奇宝贝和动物发声！\n\n请持续关注我们接下来即将发表的“神奇宝贝之紫版——非官方PETA模仿游戏”！该版游戏和此版本基本上大同小异，没什么改进，但就是要这样换汤不换药，才能称为“神奇宝贝”嘛！" />\n        </text>\n        <text id="winCheat">\n        	<line string="再玩一次，并于战斗当中输入&quot;%cheat%&quot;来得到特殊协助！" />\n        </text>\n		<text id="helpTitle">\n			<line string="如何进行游戏" />\n		</text>\n		<text id="help1">\n			<line string="选择“打斗”或\n“变换神奇宝贝”" />\n		</text>\n		<text id="help2">\n			<line string="利用对手的弱点来决定\n攻击招数" />\n		</text>\n		<text id="help3">\n			<line string="将所有对手打败\n解放神奇宝贝" />\n		</text>\n		<text id="helpButton">\n			<line string="游戏开始！" />\n		</text>\n		<text id="playButton">\n			<line string=" 开始游戏！" />\n		</text>\n		<text id="languageChinese">\n			<line string="中文" />\n		</text>\n		<text id="languageEnglish">\n			<line string="ENGLISH" />\n		</text>\n        <text id="heshemale">\n			<line string="他" />\n		</text>\n        <text id="heshefemale">\n			<line string="她" />\n		</text>\n		<text id="hesheplural">\n			<line string="他们" />\n		</text>\n        <text id="himhermale">\n			<line string="他" />\n		</text>\n        <text id="himherfemale">\n			<line string="她" />\n		</text>\n        <text id="himherplural">\n			<line string="他们" />\n		</text>\n        <text id="himherselfmale">\n			<line string="自己" />\n		</text>\n        <text id="himherselffemale">\n			<line string="自己" />\n		</text>\n        <text id="himherselfplural">\n			<line string="他们自己" />\n		</text>\n        <text id="hishermale">\n			<line string="他的" />\n		</text>\n        <text id="hisherfemale">\n			<line string="她的" />\n		</text>\n        <text id="hisherplural">\n			<line string="他们的" />\n		</text>\n        <text id="useSingular">\n			<line string="使用" />\n		</text>\n        <text id="usePlural">\n			<line string="使用" />\n		</text>\n        <text id="isSingular">\n			<line string="是" />\n		</text>\n        <text id="isPlural">\n			<line string="是" />\n		</text>\n        <text id="possessiveAddOn">\n			<line string="的" />\n		</text>\n        <text id="height">\n			<line string="身高" />\n		</text>\n        <text id="weight">\n			<line string="体重" />\n		</text>\n        <text id="loading">\n			<line string="加载中" />\n		</text>\n        <text id="treasure1">\n			<line string="视频" />\n		</text>\n        <text id="treasure2">\n			<line string="桌面" />\n		</text>\n        <text id="treasure3">\n			<line string="集换式卡片" />\n		</text>\n        <text id="treasureUnknown">\n			<line string="????????" />\n		</text>\n        <text id="treasureUnlocked">\n			<line string="你已解开3个藏宝箱中的%currentTreasures%个" />\n		</text>\n        <text id="noTreasureUnlocked">\n			<line string="你还没解开任何藏宝箱！" />\n		</text>\n        <text id="treasure">\n			<line string="宝藏" />\n		</text>\n        <text id="download">\n			<line string="观看" />\n		</text>\n        <text id="gameOverText">\n			<line string="战斗失败\n在邻近的神奇宝贝中心稍作休息后，再继续英勇奋斗，揭开企业自私剥削神奇宝贝的阴谋吧！" />\n		</text>\n        <text id="areYouSureText">\n			<line string="你确定？" />\n		</text>\n        <text id="yes">\n			<line string="是" />\n		</text>\n        <text id="no">\n			<line string="否" />\n		</text>\n        <text id="credits">\n			<line string="感谢名单" />\n		</text>\n        <text id="share">\n			<line string="分享视频" />\n		</text>\n        <text id="cheatCode">\n			<line string="7749" />\n		</text>\n	</texts>\n</blackAndBlue>';