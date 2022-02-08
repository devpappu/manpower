<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountrySectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('country_sectors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('country_sector_id');
            $table->unsignedBigInteger('country_id');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('CasCade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('country_sectors');
    }
}
