class OnboardingParser:

    @staticmethod
    def parse_field_value(
        field: str,
        value: str
    ):

        value = value.strip()

        if field == "full_name":
            return value

        if field == "virtual_office_interest":

            return (
                value.lower()
                in [
                    "yes",
                    "y",
                    "true",
                    "interested"
                ]
            )

        if field in [
            "skills",
            "community_interest"
        ]:

            return [
                item.strip()
                for item in value.split(",")
                if item.strip()
            ]

        return value