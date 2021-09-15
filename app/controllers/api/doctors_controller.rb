class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show,:update,:destroy]

  def index
    render json: Doctor.all
  end

  def show
    render json: @doctor
  end

  def create
  end

  def update
  end

  def destroy
    @doctor.destroy
    render json: @doctor
  end

  private
  def set_doctor
    @doctor= Doctor.find(params[:id])
  end 

  def doctor_params
    params.require(:doctor).permit(:name)
  end
end
