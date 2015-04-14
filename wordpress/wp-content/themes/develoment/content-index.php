<div class="main-box col_9">
<div>
	<?php while(have_posts()) : the_post(); ?>
		<div class ="test">
		<a href="<?php the_permalink(); ?>">
		<img src="http://dev.daychen.tw/team1/wp-content/uploads/2015/04/master_01.png" alt ="">
		<p>累了嗎 職場生存學我們都在夾縫中成長，至少我們還有最好的避風港</p>
		</a>
		</div>
	<?php endwhile; ?>

</div>
<div class="page-bar">
	<ul>
		<li><a href="#"><p><</p></a></li>
		<li><a href="#"><p>1</p></a></li>
		<li><a href="#"><p>2</p></a></li>
		<li><a href="#"><p>3</p></a></li>
		<li><a href="#"><p>4</p></a></li>
		<li><a href="#"><p>5</p></a></li>
		<li><a href="#"><p>next></p></a></li>
	</ul>
	
</div>
</div>