<form action="{{ route('registerUser') }}" method="POST">
    @csrf
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
