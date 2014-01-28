<div class="full_w">
  <form action="" method="post">
    <?php if ($model->stored() == false) { ?>
      <div class="element">
        <label for="name">ID <span class="red">(обов'язково)</span></label>
        <input id="name" name="data[id]" class="text" value="" required/>
      </div>
    <?php } ?>
    <div class="element">
      <label for="meta_title">Meta title <span class="red">(обов'язково)</span></label>
      <input id="meta_title" name="data[meta_title]" class="text" value="<?php echo $model->meta_title ?>" required/>
    </div>

    <div class="element">
      <label for="meta_description">Meta Desctiption</label>
      <input id="meta_description" name="data[meta_description]" class="text" value="<?php echo $model->meta_description ?>"/>
    </div>

    <div class="element">
      <label for="meta_keywords">Meta Keywords</label>
      <input id="meta_keywords" name="data[meta_keywords]" class="text" value="<?php echo $model->meta_keywords ?>"/>
    </div>


    <div class="entry">
      <button type="submit" name="save_and_list" class="add">Зберегти</button>
      <button type="submit" name="save_and_stay" class="add">Зберегти і продовжити</button>
    </div>
  </form>
</div>