using System.Runtime.Serialization;

namespace me.authisfor.AuthBackend.Api
{
    public class ErrorResponse
    {
        [DataMember(EmitDefaultValue = false)]
        public string? Message { get; set; }

        [DataMember(EmitDefaultValue = false)]
        public string? Exception { get; set; }
        [DataMember(EmitDefaultValue = false)]
        public IEnumerable<string>? Issues { get; set; }
    }
}
