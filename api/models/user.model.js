import mongoose from "mongoose";

// Initialize a new Schema.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAMFBMVEXk5ueutLeqsbTr7e3n6eqxt7q4vcDW2drh4+SnrrHGyszc3+DJzc/Z3N27wMPS1deF7xLCAAAEF0lEQVR4nO2c25LjKAxAMRY2N8P//+1ix5PeziYOICwxtZynrn46pRISYBEhBoPBYDAYDAaDwWAwGGQDB9wWX9kVtVujTfjo9OM/fQJi83aRxsgDY6bFRten7yz8oqScfiGlChFmbrdXQNhX0x9jL7qKLzj/yXXHTF734ztHdeF6+C5rJ7ogwrXqA9uFLmzfAvsnvB1kA8QpSzatNsWeDUk2H7nx6kI0BbaTYY1uoWxiZZRdC12nSWk2W5dXDf6NVFy5AKFYNuky1V3wpUn70I0curDVuCYWltStyYMjuBy5sFbKpqpLH1xYqm1loA4urFVL7NTdqG3rQ0ufueDqXRPK0dpalC1xzdWYRNjXGaVsdWd46lLaCo8KbSq5kdK2to89Y0tachVONkF4f6MRreEMLp2swDSy05buQAnYRUZacZG94YCu+c5LA1uyZTbjS8JEV8JmvOywHbb0ti1WGV1NwG5qJsp6CxZv6+k2YX9V5xUOv6shPEc22DH+VbtxRfk1FbvMJOEiExCxp0jKuyVwyFRQhLICe+iVllQWPCq0kvi7mUbJUl/m45ovZUU40BhbYldUcEmL7Un9fTPtBeOD6isQSXq/+KTuVoH2pvkJbHU7MaaRiqpcMCyfeQ/K+y/XJ/QdXbq5kYFvmqK4AZO33BeKxj+kYh5ozJ1dOyPLPRCW/6GPN2f/kLdjkJ0MMqZT2vdskN0MiQrQwVz7Gsufsj/Mbvk8fClV6Mk1AXMM6l2ApVSWedjyHSBcXMzvjY40Zomur6nxH0Cs9thHqqMlL3bt1fQEZtDbmnA6/clt84X9yct80vHzl91Mb9FbG5aDEIK1MW66K2cArd3qrUpLyvx3le3/Cj5uTrO/2UlhczEFczKX3UFKk2qujSunMMBm0+K/ekXySzlVihAFx6OdlKRruI7oe2ejvCPubHtdfdu5cjAy+I0sJWDW9mJXkBPglMU0viC2Bl8i963O/Vc2KQW+bQ6z2TP4zvjCvAZUCrwglzvfybmQWa3yfdVNVzegP74lxGCWO9Jhjrgh1o+k42XrdABoMFT1mbaHC6h/LpBFy0MmtJitu0Y2y16oej1UqtvoGWLJTRcG41vIri37wRUNLqLpZBvoogcRKHVpZVPuYibw7i6zb3Tro5uqAbEs5huwpildL7qVmzKKpvCOqq5W+aQUTdWLX/oV9tStWGn61i3iNeWP1fFjoNXIpTi0fLL7BqcsF1pML2N0i2QBP2CLomyhcZXaJ6qg6HK03N/Ikq05Y0E4KRhk4Ky1Jya/5uKf5qGR2a83WjxnwOvmLrMWz3DQZM9q498HtCCz5FIfxj6QuXGErB/Qup3M3+EB7tbwQOXVsOIBupvIO6Cxt90HmaffdZI9kHu1MPdBR3MC/wf+AfAyOEdHzYUBAAAAAElFTkSuQmCC",
    },
  },
  { timestamps: true }
);

//  Set it as a model.
const User = mongoose.model("User", userSchema);

export default User;
