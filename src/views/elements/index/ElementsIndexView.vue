<template>
    <div class="elements-index-view">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h3 class="card-title">Elemente</h3>
                                </div>
                                <div class="col-sm-6 text-right">
                                    <a href="#" class="btn btn-success btn-sm">
                                        <i class="glyphicon glyphicon-plus"></i> create
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <!--@TODO: implement notification stuff-->
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="element_type in element_types">
                                    <td>{{element_type.id}}</td>
                                    <td>
                                        {{element_type.name}}
                                    </td>
                                    <td class="text-right">
                                        <div class="btn-group pull-right" role="group">
                                            <a class="btn btn-sm btn-primary" href="#">
                                                <i class="glyphicon glyphicon-pencil"></i> edit
                                            </a>
                                                <button class="btn btn-sm btn-danger"
                                                        type="submit"><i class="glyphicon glyphicon-trash"></i> delete</button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ElementsIndexView.ts"></script>

<style lang="scss" src="./ElementsIndexView.scss" scoped></style>