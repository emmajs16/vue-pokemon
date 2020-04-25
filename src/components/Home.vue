<template lang="html">
    <div id="app">
      <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div>
                    <h1>Gotta Catch Em All</h1>
                    <h6>You may Save & Load your Data</h6>
                    <h6>Click Collection to see your Pokemon</h6>
                    <h6>Click Pokemon to get more Pokemon</h6>
                    <hr>
                    <p>Total Pokemon Collected: {{ collectionSize(state )}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
