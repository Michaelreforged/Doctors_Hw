class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show,:destroy,:update]

  def index
    render json: Appointment.all_plus_more
  end

  def show
    render json: @appoint
  end

  def create
    @appointment = Appointment.new(appoint_params)
    if(@appointment.save)
      render json: @appointment
    else
      render json: {error: @appointment.errors}, status: 422
    end
  end

  def update
    if @appointment.update(appoint_params)
      render json: @appointment
    else
      render json: {errors: @appointment.errors}, status: 422
    end
  end

  def destroy
    @appoint.destroy
    render json: @appoint
  end

  private 
  def set_appointment
    @appoint = Appointment.find(params[:id])
  end
  def appoint_params
    params.require(:appointment).permit(:desc, :date, :user_id, :doctor_id)
  end
end
