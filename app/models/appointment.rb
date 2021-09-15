class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  def self.all_plus_more
    appointments = Appointment.all
    appointments.map do |appointment|
      {id: appointment.id, date:appointment.date, desc:appointment.desc, user:appointment.user, doctor:appointment.doctor}
    end
  end
end
