<form action="<?php echo e(route('registerUser')); ?>" method="POST">
    <?php echo csrf_field(); ?>
    <label>
        Nombre:
        <input type="text" name="name">
    </label>
    <label>
        <input type="email" name="email" placeholder="Email">
    </label>
    <label>
        <input type="password" name="password" placeholder="password">
    </label>
    <input type="submit" value="Log in">
</form>
<?php /**PATH /home/miguel/Repos/Zonzamas/2DAW/DPL/T1/laravel_app/resources/views/register.blade.php ENDPATH**/ ?>